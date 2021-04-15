import React from "react";
import { useHistory } from "react-router";
import AppBar from "../components/AppBar.js";
//import Logo from '../components/Logo.js';

const Events = () => {
  const showCal = () => {
    var iframe = document.getElementById("calendarEmbed");
    var email = "tlsa.webapp@gmail.com";
    if (email && /.+\@.+/.test(email)) {
      iframe.src =
        "https://calendar.google.com/calendar/embed?src=" + encodeURI(email);
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Events Schedule</h1>
      <div>
        <h6></h6>
        <a href="/CreateEvent">
          <button className="btn-smaller">
            Create Event
          </button>
        </a>

        <text> &emsp; &emsp; &emsp;</text>

        <button className="btn-smaller" onClick={showCal}>
          Load Updated Calendar
        </button>

        <text> &emsp; &emsp; &emsp;</text>

        <a href="/CheckIn">
          <button className="btn-smaller">
            Current Events
          </button>
        </a>
      
        <h3> </h3>

        <div id="calendarEmbedWrapper">
          <div className="iframe-container">
            <iframe id="calendarEmbed" width="1450vw" height="700vh" />
          </div>
          <div id="calendarEmbedBlocker"></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
