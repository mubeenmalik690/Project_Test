import React from "react";
import "./Cards.css";
import { Container, Col, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Container className="w-sm-75 mx-auto my-sm-5 my-3">
        <Row>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              Established <strong>since 1986</strong>
            </div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              <strong>ATOL & ABTA</strong> Protected
            </div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              Trusted by over <strong>2.5 million</strong> happy travellers
            </div>
          </Col>
        </Row>
        <Row className="mt-sm-4 mt-2">
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">One stop travel shop</div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              Best <strong>price guarantee</strong>
            </div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              <strong>24x7</strong> customer support
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
