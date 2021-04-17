import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";

const AppBar = (props) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <Navbar collapseOnSelect expand="lg" bg="#151C48" variant="dark">
          <img
            src="../../tlsa-logo.jpg"
            height="70"
            className="d-inline-block align-top"
            alt="TLSA logo"
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/events">
                <h4 className="nav-menu">Events</h4>
              </Nav.Link>
              <Nav.Link href="/search">
                <h4 className="nav-menu">Search</h4>
              </Nav.Link>
              <Nav.Link href="/myaccount">
                <h3 className="nav-menu">My Account</h3>
              </Nav.Link>
              <LogoutButton />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  );
};

export default AppBar;
