import React from "react";
import { useHistory } from "react-router";
import AppBar from "../components/AppBar.js";
//import Logo from '../components/Logo.js';

const Events = () => {
  return (
    <div>
      <AppBar />
      <h1 style={{ textAlign: "center" }}>Upcoming Events</h1>
      <br />
      <div>
<<<<<<< Updated upstream
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
=======
        <a href="/CreateEvent">
          <button className="btn-smaller">Create Event</button>
        </a>

        <text> &emsp; &emsp;</text>

        <button className="btn-smaller" onClick={showCal}>
          Load Updated Calendar
        </button>

        <h3> </h3>

        <div id="calendarEmbedWrapper">
          <div className="iframe-container">
            <iframe id="calendarEmbed" width="1450vw" height="700vh" />
          </div>
          <div id="calendarEmbedBlocker"></div>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Events;
