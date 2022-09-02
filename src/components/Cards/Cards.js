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
              <img src="./imgs/established.png" className="card_img" alt="" />
              Established <strong>since 1986</strong>
            </div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              <img src="./imgs/protect.png" className="card_img" alt="" />
              <strong>ATOL & ABTA</strong> Protected
            </div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              <img src="./imgs/happy-travel.png" className="card_img" alt="" />
              Trusted by over <strong>2.5 million</strong> happy travellers
            </div>
          </Col>
        </Row>
        <Row className="mt-sm-4 mt-2">
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              <img src="./imgs/stopshop.png" className="card_img" alt="" />
              One stop travel shop
            </div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              <img src="./imgs/bestprize.png" className="card_img" alt="" />
              Best <strong>price guarantee</strong>
            </div>
          </Col>
          <Col>
            <div className="p-sm-4 p-2 cardsBorder">
              <img src="./imgs/support.png" className="card_img" alt="" />
              <strong>24x7</strong> customer support
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
