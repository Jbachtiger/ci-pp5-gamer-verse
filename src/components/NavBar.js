import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="60px" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fas fa-users"></i> Community Hub
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/reviews">
              <i className="fas fa-star"></i> Reviews
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/events">
              <i className="fas fa-calendar-check"></i> Events
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
              <i className="fas fa-sign-in-alt"></i> Sign In
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
              <i className="fas fa-user-plus"></i> Sign Up
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/about">
              <i className="fas fa-address-card"></i> About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;