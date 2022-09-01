import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button, Col, Row, Form, Table } from "react-bootstrap";

const InitialForm = () => {
  const [cityCode, setCityCode] = useState([]);
  const [details, setDetails] = useState();
  const [leave, setLeave] = useState();
  const [arrive, setArrive] = useState();
  const [moment, setMoment] = useState();

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/all?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e"
      )
      .then((res) => {
        console.log("data:", res.data.airports);
        setCityCode(res.data.airports);
        console.log("settled city codes", cityCode);
        // setTimeout(() => {
        //   setCityCode(res.data.airports);
        //   console.log(cityCode, "settled city code");
        // }, 3000);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let leave = e.target[0].value;
    console.log(e.target[0].value);

    // let arrive = e.target[1].value;
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    console.log(e.target[4].value);
    console.log(e.target[5].value);
    console.log(e.target[6].value);
    console.log(e.target[7].value);

    // let fullDate = e.target[2].value;
    let fullDate = moment;
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

    axios(
      `https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/schedules/rest/v1/json/from/${leave}/to/${arrive}/departing/${year}/${month}/${day}?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e`
    ).then((res) => {
      console.log("scheduele data:", res.data);
      // setDetails("airlines: ", res.data.appendix.airlines);
      // console.log(details);

      setTimeout(() => {
        setDetails(res.data.appendix.airlines);
        console.log(details, "settled Flight Details");
      }, 2000);
    });
  };

  const onSearchChange = (e) => {
    let searching = e.target.value;
    const filteredCity = cityCode.filter((item, index) => {
      return item.city.toLowerCase().includes(searching.toLowerCase());
    });
    console.log(filteredCity);
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
              <Form.Select
                defaultValue="Youth"
                onChange={(e) => setLeave(e.target.value)}
              >
                <option defaultValue="">City Name</option>
                {cityCode.length === 0 ? (
                  <option>loading</option>
                ) : (
                  cityCode.map((item, i) => (
                    <option key={i} value={item.fs}>
                      {item.city}
                    </option>
                  ))
                )}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label>Arrive To</Form.Label>
              <Form.Select
                defaultValue="Youth"
                onChange={(e) => setArrive(e.target.value)}
              >
                <option defaultValue="">City Name</option>
                {cityCode.length === 0 ? (
                  <option>loading</option>
                ) : (
                  cityCode.map((item, i) => (
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
            <Form.Control
              type="date"
              placeholder=""
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

          {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

          <Button variant="primary" type="submit">
            Search Flights
          </Button>
        </Form>
      )}
      <form>
        <label htmlFor="city">city name</label>
        <input
          type="search"
          id="city"
          name="city"
          onChange={(e) => onSearchChange(e)}
        />
      </form>
    </>
  );
};

export default InitialForm;
