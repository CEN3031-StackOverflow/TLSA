import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
const AppBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="#151C48" variant="dark">
        <img
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.0-9/134919524_233391981524188_3239830908428520512_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=m_LAd2nByOsAX9fapxN&_nc_oc=AQkHQmTqCB-LLjOhKUR4M3Q-HwX4Xqe2OBUT4g0a31D-IGu1pFpn5Bvs7S4W8ybX-t4&_nc_ht=scontent-atl3-2.xx&oh=fcfc3f01840ae3d5c41df18c85d62735&oe=60769C6E"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="TLSA logo"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/myaccount">My Account</Nav.Link>
            <LogoutButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppBar;
