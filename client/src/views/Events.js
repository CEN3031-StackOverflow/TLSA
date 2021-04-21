import React from "react";
import { useHistory } from "react-router";
import AppBar from "../components/AppBar.js";
import { useAuth0 } from "@auth0/auth0-react";
//import Logo from '../components/Logo.js';

const Events = () => {
  const { user, isAuthenticated } = useAuth0();

  const showCal = () => {
    var iframe = document.getElementById("calendarEmbed");
    var email = "tlsa.webapp@gmail.com";
    if (email && /.+\@.+/.test(email)) {
      iframe.src =
        "https://calendar.google.com/calendar/embed?src=" + encodeURI(email);
    }
  };
  return (
    isAuthenticated && (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Events Schedule</h1>
      <div style={{marginLeft: "20px", marginRight: "20px"}}>
        <a href="/CheckIn">
          <button className="btn-smaller">
            Current Events
          </button>
        </a>

        <text> &emsp; </text>

        <button className="btn-smaller" onClick={showCal}>
          Load Updated Calendar
        </button>

        <text> &emsp; &emsp; &emsp;</text>

        <a href="/CreateEvent" style={{float: "right"}}>
          <button className="btn-smaller">
            Create Event
          </button>
        </a>
      
        <h3> </h3>

        <div id="calendarEmbedWrapper" >
          <div className="iframe-container"style={{borderRadius: "5px"}}>
            <iframe id="calendarEmbed" width="1450vw" height="700vh"/>
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default Events;
