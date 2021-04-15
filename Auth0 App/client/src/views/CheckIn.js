import React from "react";
import { useHistory } from "react-router";
import AppBar from "../components/AppBar.js";
import { useAuth0 } from "@auth0/auth0-react";

const CheckIn = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h1 style={{ textAlign: "center" }}>Current Events</h1>


        
      </div>
    )
  );
};

export default CheckIn;
