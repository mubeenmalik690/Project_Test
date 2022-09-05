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
      `https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/schedules/rest/v1/json/from/${depart}/to/${destiny}/departing/${year}/${month}/${day}?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e`
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
      <h1>Results</h1>
      {finalSch != null
        ? finalSch.map((item, index) => {
            return (
              <div key={index} className="my-3">
                <Card className="text-center">
                  <Card.Header>Your Flight Scheduele</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Departure Airport : {item.departureAirportFsCode}
                    </Card.Title>
                    <Card.Text>Departure Time : {item.departureTime}</Card.Text>
                    <Card.Title>
                      Arrival Airport : {item.arrivalAirportFsCode}
                    </Card.Title>
                    <Card.Text>
                      Arrival Time : {item.arrivalTime}
                      Stops : {item.stops}
                    </Card.Text>
                    <Button variant="primary" onClick={showModal}>
                      Book Now
                    </Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Flight Number : {item.flightNumber}
                  </Card.Footer>
                </Card>
              </div>
            );
          })
        : null}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" placeholder="Full Name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Email" name="email" />
          <label>Subject</label>
          <input type="text" placeholder="Subject" name="subject" />
          <label>Message</label>
          <textarea placeholder="Your Message" name="message" />
          <input type="submit" value="Send" />
        </form>
      </Modal>
    </>
  );
};

export default Results;
