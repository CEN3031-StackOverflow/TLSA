import React from "react";
import { useHistory } from "react-router";
import AppBar from "../components/AppBar.js";
//import Logo from '../components/Logo.js';

const Events = () => {
  const showCal = () => {
    var iframe = document.getElementById("calendarEmbed");
    var email = "tlsa.webapp@gmail.com";
    var blocker = document.getElementById("calendarEmbedBlocker");
    if (email && /.+\@.+/.test(email)) {
      iframe.src =
        "https://calendar.google.com/calendar/embed?src=" + encodeURI(email);
      blocker.style.display = "none";
    } else {
      alert("That doesn't look like a valid email...");
      blocker.style.display = "block";
    }
  };
  return (
    <div>
      <AppBar />
      <h1 style={{ textAlign: "center" }}>Upcoming Events</h1>
      <br />
      <div>
        <button
          style={{
            color: "#151C48",
            background: "#f4ba00",
            fontWeight: "bold",
          }}
          // {*/button not linked to route */}
        >
          Create Event
        </button>

        <div />
        <button
          style={{
            color: "#151C48",
            background: "#f4ba00",
            fontWeight: "bold",
          }}
          onClick={showCal}
        >
          Load
        </button>
        <div id="calendarEmbedWrapper">
          <iframe
            style={{ width: "100%", height: "600px" }}
            id="calendarEmbed"
          />
          <div id="calendarEmbedBlocker">
            <p>Please enter email and click load</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
