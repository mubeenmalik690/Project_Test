import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Container, Button, Col, Row, Form } from "react-bootstrap";

const InitialForm = () => {
  const [cityCode, setCityCode] = useState([]);
  // const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/all?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e"
  //     )
  //     .then((res) => {
  //       console.log("data:", res.data);
  //       // setCityCode(res.data);
  //       setTimeout(() => {
  //         setCityCode(res.data);
  //         console.log(cityCode, "settled city code");
  //       }, 3000);
  //     });
  // }, []);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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

    let fullDate = e.target[2].value;
    let dateArray = fullDate.split("-");
    console.log("Date Array:", dateArray);
    let year = parseInt(dateArray[0]);
    let month = parseInt(dateArray[1]);
    let day = parseInt(dateArray[2]);
    console.log("final date:", year, month, day);

    var bodyFormData = new FormData();
    bodyFormData.append("appId", "4af09662");
    bodyFormData.append("appKey", "d7d4dd168c63fb2101fe6fdfa8d52a2e");
    bodyFormData.append("departureAirportCode	", "lhe");
    bodyFormData.append("arrivalAirportCode	", "khi");
    bodyFormData.append("year	", year);
    bodyFormData.append("month	", month);
    bodyFormData.append("day	", day);

    // fetch(
    //   "https://api.flightstats.com/flex/schedules/rest/v1/json/from/lhe/to/khi/departing/2022/9/1?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e",
    //   {
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: {
    //       "Content-Type": "text/plain;charset=UTF-8",
    //     },
    //   }
    // ).then((res) => console.log(res));

    // axios(
    //   "https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/schedules/rest/v1/json/from/lhe/to/khi/departing/2022/9/1?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e"
    // ).then((res) => {
    //   console.log("scheduele data:", res.data);

    //   setShow(true);
    // });
  };
  return (
    <>
      {cityCode.length === 0 ? (
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
              <Form.Select defaultValue="Youth">
                <option defaultValue="">City Name</option>
                {cityCode.length === 0 ? (
                  <option>loading</option>
                ) : (
                  cityCode.airports.map((item, i) => (
                    <option key={i} value={item.fs}>
                      {item.city}
                    </option>
                  ))
                )}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label>Arrive To</Form.Label>
              <Form.Select defaultValue="Youth">
                <option defaultValue="">City Name</option>
                {cityCode.length === 0 ? (
                  <option>loading</option>
                ) : (
                  cityCode.airports.map((item, i) => (
                    <option key={i} value={item.fs}>
                      {item.city}
                    </option>
                  ))
                )}
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Departure Date</Form.Label>
            <Form.Control type="date" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Return Date</Form.Label>
            <Form.Control type="date" placeholder="" />
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

          {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

          <Button variant="primary" type="submit">
            Search Flights
          </Button>
        </Form>
      )}

      {/* Modal for Flights response and form data */}

      {/* {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))} */}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
};

export default InitialForm;
