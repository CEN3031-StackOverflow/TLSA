import React from "react";
//import { Container } from 'react-bootstrap';
import LoginButton from "../components/LoginButton.js";
import Logo from "../components/Logo.js";

const LandingPage = () => {
  return (
    <>
      <h1 className="landing-header">
        Welcome to <br /> Thai-Lao Student <br /> Association
      </h1>
      <div className="landing-logo">
        <Logo />
      </div>
      <LoginButton /> {/* Only shows up if the user is not logged in. */}
    </>
  );
};

export default LandingPage;
