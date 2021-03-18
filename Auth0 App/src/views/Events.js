import React from "react";
import AppBar from "../components/AppBar.js";
//import Logo from '../components/Logo.js';

const Events = () => {
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
      </div>
    </div>
  );
};

export default Events;
