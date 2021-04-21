import React from "react";
import Profile from "../components/Profile.js";
import AppBar from "../components/AppBar.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Button, Row, Col } from "react-bootstrap";
//import Logo from '../components/Logo.js';

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <>
      <h1 style={{ textAlign: "center", marginBottom:"50px"}}>My Account</h1>
      <Profile />
    </>
    )
  );
};

export default MyAccount;