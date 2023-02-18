import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function NavBar() {
    const navlinkStyle = {
        color : 'white',
    };

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={navlinkStyle}>Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={navlinkStyle}>Dashboard</Nav.Link>
            <Nav.Link href="#link" style={navlinkStyle}>Manage Financials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;