import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        // bg="light"
        expand="lg"
        className="px-md-5"
        sticky="top"
        style={{ backgroundColor: "#dedad9" }}
      >
        <Container fluid>
          <Navbar.Brand className="" to="#">
            <img
              src="./imgs/Logo PNG.png"
              className="img-fluid"
              style={{ height: "50px", width: "120px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="#" className="active">
                Home
              </Nav.Link>
              <Nav.Link to="/hotels" className="">
                Hotels
              </Nav.Link>
              <Nav.Link to="/contactUs" className="">
                Contact Us
              </Nav.Link>
              <Nav.Link to="/services" className="">
                Services
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
