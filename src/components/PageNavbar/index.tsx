import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const PageNavbar = () => (
  <Navbar fixed="top">
    <Navbar.Brand>Renz</Navbar.Brand>
    <Navbar.Toggle aria-controls="page-navbar" />
    <Navbar.Collapse id="page-navbar">
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Messages</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
