import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Row, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Results from "../Results/Results";
import airportsAutocomplete from "airports-autocomplete";
import Multiselect from "multiselect-react-dropdown";

const InitialForm = () => {
  const [details, setDetails] = useState({});
  const [finalSch, setFinalSch] = useState([]);
  const [leave, setLeave] = useState();
  const [arrive, setArrive] = useState();
  const [moment, setMoment] = useState();
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    airportsAutocomplete()
      .then((res) => {
        console.log("auto complete", res.data);
        setNewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [finalSch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    console.log(e.target[4].value);
    console.log(e.target[5].value);
    console.log(e.target[6].value);
    console.log(e.target[7].value);

    let fullDate = moment;
    let dateArray = fullDate.split("-");
    console.log("Date Array:", dateArray);
    let year = parseInt(dateArray[0]);
    let month = parseInt(dateArray[1]);
    let day = parseInt(dateArray[2]);
    console.log("final date:", year, month, day);

    axios(
      `https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/schedules/rest/v1/json/from/${leave}/to/${arrive}/departing/${year}/${month}/${day}?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e`
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

  const onSelect = (selectedList, selectedItem) => {
    console.log("multiselected item", selectedItem.iata_code);
    setLeave(selectedItem.iata_code);
  };

  const onSelect2 = (selectedList, selectedItem) => {
    console.log("multiselected item", selectedItem.iata_code);
    setArrive(selectedItem.iata_code);
  };

  return (
    <>
      {newData === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Form
          className="w-75 mx-auto bg-dark text-white p-3 mt-md-5 mt-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="">
              <Form.Label>Leaving From</Form.Label>
              {/* <Form.Control type="" placeholder="City Name" /> */}
              <Multiselect
                options={newData} // Options to display in the dropdown
                selectedValues="lahore" // Preselected value to persist in dropdown
                displayValue="name" // Property name to display in the dropdown options
                // singleSelect={true}
                onSelect={onSelect}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label>Arrive To</Form.Label>
              <Multiselect
                options={newData} // Options to display in the dropdown
                selectedValues="lahore" // Preselected value to persist in dropdown
                displayValue="name" // Property name to display in the dropdown options
                // singleSelect={true}
                onSelect={onSelect2}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Departure Date</Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              value={moment}
              onChange={(e) => setMoment(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Return Date</Form.Label>
            <Form.Control disabled type="date" placeholder="" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="">
              <Form.Label>Adult (> 15)</Form.Label>
              <Form.Select defaultValue="Youth">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </Form.Select>
            </Form.Group>

            {/* <Form.Group as={Col} controlId="formGridState"> */}
            <Form.Group as={Col} controlId="">
              <Form.Label>Youth (12-15)</Form.Label>
              <Form.Select defaultValue="Youth">
                <option>Youth</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label>Children (2-11)</Form.Label>
              <Form.Select defaultValue="Children">
                <option>Children</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" as={Col} controlId="">
            <Form.Label>Travel Class</Form.Label>
            <Form.Select defaultValue="Economy Class">
              <option>Economy Class</option>
              <option>Premium Economy</option>
              <option>Business Class</option>
              <option>First Class</option>
              <option>No Preference</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Search Flights
          </Button>
        </Form>
      )}

      {/* <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" placeholder="Full Name" name="name" />
        <label>Email</label>
        <input type="email" placeholder="Email" name="email" />
        <label>Subject</label>
        <input type="text" placeholder="Subject" name="subject" />
        <label>Message</label>
        <textarea placeholder="Your Message" name="message" />
        <input type="submit" value="Send" />
      </form> */}
      {console.log(finalSch)}
      {finalSch != null
        ? finalSch.map((item, index) => {
            return (
              <div key={index}>
                <h1>Departure Airport : {item.departureAirportFsCode}</h1>
                <p>Departure Time : {item.departureTime}</p>
                <h1>Arrival Airport : {item.arrivalAirportFsCode}</h1>
                <p>Arrival Time : {item.arrivalTime}</p>
                <h1>Flight Number : {item.flightNumber}</h1>
                <h3>Stops : {item.stops}</h3>
              </div>
            );
          })
        : null}
      {/* <Results finalSch={finalSch} /> */}
    </>
  );
};

export default InitialForm;
