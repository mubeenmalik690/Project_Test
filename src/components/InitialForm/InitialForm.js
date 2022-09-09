import { useEffect, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import airportsAutocomplete from "airports-autocomplete";
import { Select } from "antd";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";
import Holiday from "../Holidays/Holiday";
import Airline from "../Airline/Airline";
import Gallery from "../Gallery/Gallery";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const InitialForm = () => {
  const [leave, setLeave] = useState();
  const [arrive, setArrive] = useState();
  const [moment, setMoment] = useState();
  const [moment2, setMoment2] = useState();
  const [newData, setNewData] = useState([]);
  const [returnButton, setReturnButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    airportsAutocomplete()
      .then((res) => {
        console.log("auto complete", res.data);
        setNewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let arrive_alert = document.getElementById("arrive_alert");
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

    let returnFullDate = moment2;
    let rtnDate = new Date(returnFullDate);

    navigate("/results", {
      state: {
        depart: leave,
        destiny: arrive,
        year: year,
        month: month,
        day: day,
        returnYear: rtnDate.getFullYear() || null,
        returnMonth: rtnDate.getMonth() + 1 || null,
        returnDay: rtnDate.getDate() || null,
      },
    });
  };

  return (
    <>
      <Slider />

      <img src="./imgs/whatsapp.svg" alt="whatsapp" className="whatsapp" />
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

              <Select
                className="form-control"
                showSearch
                onChange={(e) => {
                  setLeave(e);
                }}
                defaultValue={{
                  value: "LHR",
                  label: "London, Heathrow[LHR],United Kingdom",
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                filterSort={(optionA, optionB) => {
                  // console.log({ optionA, optionB });
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase());
                }}
              >
                {newData.map((each, index) => {
                  let option =
                    each.city +
                    ", " +
                    each.name +
                    `[${each.iata_code}],` +
                    each.country;
                  return (
                    <Option key={index} value={each.iata_code}>
                      {option}
                    </Option>
                  );
                })}
              </Select>
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label>Arrive To</Form.Label>
              <Select
                className="form-control"
                showSearch
                onChange={(e) => {
                  setArrive(e);
                  let arrive_alert = document.getElementById("arrive_alert");
                  arrive_alert.innerHTML = "";
                }}
                // defaultValue={{
                //   value: "LHR",
                //   label: "London, Heathrow[LHR],United Kingdom",
                // }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                filterSort={(optionA, optionB) => {
                  // console.log({ optionA, optionB });
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase());
                }}
              >
                {newData.map((each, index) => {
                  let option =
                    each.city +
                    ", " +
                    each.name +
                    `[${each.iata_code}],` +
                    each.country;
                  return (
                    <Option key={index} value={each.iata_code}>
                      {option}
                    </Option>
                  );
                })}
              </Select>
              <span id="arrive_alert" className="text-danger"></span>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Departure Date</Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              value={moment}
              onChange={(e) => {
                setMoment(e.target.value);
              }}
            />
            <span id="Firstdate_alert" className="text-danger"></span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Return Date</Form.Label>
            <input
              type="checkbox"
              style={{ marginLeft: "10px" }}
              value={returnButton}
              checked={returnButton}
              onChange={(e) => {
                console.log(e.target.value);
                setReturnButton(!returnButton);
              }}
            />
            <p>
              {returnButton ? <p>Return Enabled</p> : <p>Return Disabled</p>}
            </p>
            <Form.Control
              type="date"
              placeholder=""
              value={moment2}
              onChange={(e) => setMoment2(e.target.value)}
              disabled={!returnButton}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="">
              <Form.Label>Adult (&#62; 15)</Form.Label>
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

      <Cards />
      <Holiday />
      <Gallery />
      {/* <Airline /> */}
    </>
  );
};

export default InitialForm;
