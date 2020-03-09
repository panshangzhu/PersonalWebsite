import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/Logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Styles = styled.div`
  font-family: 'Poppins', sans-serif;
  .navbar {
    background-color: #5c4830;
    z-index: 10;
    font-size: 1.1rem;
  }
  .mr-auto a {
    color: #bbb;
    padding-left: 1rem;
    text-decoration: none;
    &:hover {
      color: white;
    }
    margin-left:auto;
    margin-right:auto;
  }
`;

function Navigation() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logo} style={{ maxHeight: "30px" }} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/life">Life</NavLink>
            <NavLink to="/programming">Programming</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/comments">Comment</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default Navigation;
