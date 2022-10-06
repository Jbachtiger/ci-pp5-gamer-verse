import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link><i className="fas fa-users"></i> Community Hub</Nav.Link>
            <Nav.Link><i className="fas fa-star"></i> Reviews</Nav.Link>
            <Nav.Link><i className="fas fa-calendar-check"></i> Events</Nav.Link>
            <Nav.Link><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
            <Nav.Link><i className="fas fa-user-plus"></i> Sign Up</Nav.Link>
            <Nav.Link><i className="fas fa-address-card"></i> About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
