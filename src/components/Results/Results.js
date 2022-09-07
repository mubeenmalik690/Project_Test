import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { Modal } from "antd";

const Results = () => {
  const [details, setDetails] = useState({});
  const [finalSch, setFinalSch] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state } = useLocation();
  const { depart, destiny, year, month, day } = state; // Read values passed on state

  console.log({ depart, destiny, year, month, day });

  useEffect(() => {
    axios(
      `https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/schedules/rest/v1/json/from/${depart}/to/${destiny}/departing/${year}/${month}/${day}?appId=5f701a91&appKey=cd3a7444b5de4bd65087563e81eea642`
    )
      .then((res) => {
        console.log("scheduele data:", res.data);
        setDetails(res.data.appendix);
        setFinalSch(res.data.scheduledFlights);
        console.log("appendix: ", details);
        console.log("scheduledFlights", finalSch);
      })
      .catch((err) => {
        alert("Somthing went wrong", err);
        console.log(err);
      });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("email form");
    console.log(e.target);

    emailjs
      .sendForm(
        "service_7hnsfbh",
        "template_p6y6qzn",
        e.target,
        "4O8amRTWJcioOPat4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent Successfully", result.text);
        },
        (error) => {
          alert("Somthing went wrong", error);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="m-auto my-3">
        <h1 className="h1">Results</h1>
      </div>
      {/* carrierFsCode */}
      {finalSch != null ? (
        finalSch.map((item, index) => {
          return (
            <div key={index} className="my-3">
              <Card className="text-center">
                {details.airlines
                  .filter((item2, index) => {
                    return item2.fs.toLowerCase() ==
                      item.carrierFsCode.toLowerCase()
                      ? item2.name
                      : null;
                  })
                  .map((x) => {
                    return (
                      <Card.Header>
                        {" "}
                        <h1 className="h1">
                          {index + 1}: {x.name}
                        </h1>{" "}
                      </Card.Header>
                    );
                  })}
                <Card.Body>
                  <Card.Title>
                    Departure Airport : {item.departureAirportFsCode}
                  </Card.Title>
                  <Card.Text>Departure Time : {item.departureTime}</Card.Text>
                  <Card.Title>
                    Arrival Airport : {item.arrivalAirportFsCode}
                  </Card.Title>
                  <Card.Text>Arrival Time : {item.arrivalTime}</Card.Text>
                  <Card.Text>Stops : {item.stops}</Card.Text>
                  <Button variant="primary" onClick={showModal}>
                    For Booking and Pricing
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Flight Number : {item.flightNumber}
                </Card.Footer>
              </Card>
            </div>
          );
        })
      ) : (
        <div className="h1 w-75 m-auto d-flex flex-column">
          <h3>
            We're <strong>Sorry</strong> that no flights are available for your
            search, Send us an Email so we can assist you better
          </h3>
          <Button variant="primary" onClick={showModal}>
            Send Email
          </Button>
        </div>
      )}
      <Modal
        title="Customer Service"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={sendEmail}>
          <label>Name</label>
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Full Name"
            name="name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            className="form-control"
            type="number"
            placeholder=""
            name="number"
          />
          <br />
          <label>Message</label>
          <br />
          <textarea
            className="form-control"
            placeholder="One Way Or Return ?"
            name="message"
          />
          <br />
          <div className="ms-auto">
            <button className="mb-2"> Send Email </button>
          </div>
        </form>
        <button onClick={handleCancel}>Cancel</button>{" "}
      </Modal>
    </>
  );
};

export default Results;
