import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

import movieLogo from "../images/paradise-theatre.png";

const NavigationBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect className="navigation" expand="lg">
      <NavbarBrand className="mr-auto">
        <img src={movieLogo} alt="Movie Logo" width="125px" />
      </NavbarBrand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="nav-toggle"
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="link" to="/">
            Home
          </Link>

          <Link className="link" to="/archive">
            Archive
          </Link>

          <Link className="link" to="/watchlist">
            My Watchlist
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
