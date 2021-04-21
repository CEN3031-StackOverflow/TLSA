import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, NavDropdown, Form, FormControl} from 'react-bootstrap';
import Logo from '../components/Logo.js'

const NavBar = (props) => {
    return (
        <>
        {/* Bootstrap NavBar experimentation:
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#LandingPage">TLSA
            </Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="/Events">Events</Nav.Link>
                <Nav.Link href="/Search">Search</Nav.Link>
                <Nav.Link href="/MyAccount">My Account</Nav.Link>
            </Nav>
        </Navbar>

        DIY NavBar Code:
        <div className = "header" >
            <div className={"nav-items"}>
                <Logo/>
                <Link className = "nav-link" to='/Events'>Events</Link>
                <Link className = "nav-link" to='/Search'>Search</Link>
                <Link className = "nav-link" to='/MyAccount'>My Account</Link>
            </div>
        </div> */}
        </>
    )
};

export default NavBar;
