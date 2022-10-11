import React from "react";
// import Stack from 'react-bootstrap/Stack';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <Navbar bg="primary" variant="dark" className="stickyNa">
        <Container>
          <Navbar.Brand href="/">Phone Cart</Navbar.Brand>
          <Nav className="justify-content-end">
          <NavLink
            to="/"
            exact
            className="nav text-center"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/phones"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Phones
          </NavLink>
          <NavLink
            to="/cart"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Cart
          </NavLink>
         </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;