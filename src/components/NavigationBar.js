import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

import movieLogo from "../images/movie-app-logo.png";

const NavigationBar = () => {
  return (
    <Navbar className="navigation" expand="lg">
      <NavbarBrand className="mr-auto">
        <img src={movieLogo} alt="Movie Logo" width="125px" />
      </NavbarBrand>

      <Nav className="ml-auto">
        <Link className="link" to="/">
          Home
        </Link>

        <Link className="link" to="/watchlist">
          My Watchlist
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
