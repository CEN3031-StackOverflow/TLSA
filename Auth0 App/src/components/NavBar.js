import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className = "header" >
            <div className={"nav-items"}>
                <Link className = "nav-link" to='/Events'>Events</Link>
                <Link className = "nav-link" to='/Search'>Search</Link>
                <Link className = "nav-link" to='/MyAccount'>My Account</Link>
            </div>
        </div>
    )
};

export default NavBar;
