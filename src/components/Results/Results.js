const Results = ({ finalSch }) => {
  console.log("result comp console", finalSch);
  return (
    <>
      {console.log("result comp console", finalSch)}
      <h1>Results</h1>
      {finalSch.length > 0
        ? finalSch.map((item, index) => {
            <div key={index}>
              <h1>Departure Airport : {item.departureAirportFsCode}</h1>
              <p>Departure Time : {item.departureTime}</p>
              <h1>Arrival Airport : {item.arrivalAirportFsCode}</h1>
              <p>Arrival Time : {item.arrivalTime}</p>
              <h1>Flight Number : {item.flightNumber}</h1>
              <h3>Stops : {item.stops}</h3>
            </div>;
          })
        : null}
    </>
  );
};

export default Results;
