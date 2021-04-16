import React from "react";
import { useHistory } from "react-router";
import AppBar from "../components/AppBar.js";
import { useAuth0 } from "@auth0/auth0-react";

const CheckIn = () => {
  const { user, isAuthenticated } = useAuth0();

  var gapi = window.gapi;
  // If need be, when you create a new OAuth 2.0 Client ID, make sure to name it "auth2".
  var CLIENT_ID = "693133513733-fg3r3s4t6q642fiqd9re0vklnu0pglm6.apps.googleusercontent.com";
  var API_KEY = "AIzaSyDDsGsEjfXNWhGImPNCagIdOQ8WIEcsmf8";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";
  var events = [{id: "not getting events list fast enough :("}];

  function loadCurrentEvents(){
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3").then(() => {
        gapi.client.calendar.events.list({
          'calendarId': 'tlsa.webapp@gmail.com',
          'timeMin': (new Date()).toISOString(),
          // 'timeMax': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'orderBy': 'startTime'
        }).then(response => {
          events = response.result.items
          console.log('EVENTS: ', events)
        })
      })
    })
  }
  
  (async () => {
    await loadCurrentEvents();

  })();

  return (
    isAuthenticated && (
      <div>
        <h1 style={{ textAlign: "center" }}>Current Events</h1>
        <b/>
        <h1></h1>
        <ul>
          {/* loadCurrentEvents() is completing too late... */}
          {
            events.map(function(event){
              console.log(event.id);
              return  <div>
                        <h6>{event.id}</h6>
                        <button>check in</button>
                      </div>
            })
          }
        </ul>
      </div>
    )
  );
};

export default CheckIn;
