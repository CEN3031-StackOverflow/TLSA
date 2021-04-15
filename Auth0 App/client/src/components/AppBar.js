import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";

const AppBar = (props) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <>
      <Navbar collapseOnSelect expand="lg" bg="#151C48" variant="dark">
        <a href="/LandingPage">
          <img
            src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.0-9/134919524_233391981524188_3239830908428520512_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=m_LAd2nByOsAX9fapxN&_nc_oc=AQkHQmTqCB-LLjOhKUR4M3Q-HwX4Xqe2OBUT4g0a31D-IGu1pFpn5Bvs7S4W8ybX-t4&_nc_ht=scontent-atl3-2.xx&oh=fcfc3f01840ae3d5c41df18c85d62735&oe=60769C6E"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="TLSA logo"
          />
        </a>
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
