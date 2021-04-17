import React, {useState} from "react";
import { useHistory } from "react-router";
import AppBar from "../components/AppBar.js";
import { useAuth0 } from "@auth0/auth0-react";

const CheckIn = () => {
  const { user, isAuthenticated } = useAuth0();
  const [events, setEvents] = useState();
  const [loaded, setLoaded] = useState(false);

  var gapi = window.gapi;
  // If need be, when you create a new OAuth 2.0 Client ID, make sure to name it "auth2".
  var CLIENT_ID = "693133513733-fg3r3s4t6q642fiqd9re0vklnu0pglm6.apps.googleusercontent.com";
  var API_KEY = "AIzaSyDDsGsEjfXNWhGImPNCagIdOQ8WIEcsmf8";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";
  var id = user.sub.substring(6, user.sub.length)

  function incrementPts(nMod){
    if(nMod != 0){
      var requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        mode: 'cors',
        redirect: 'follow'
      };
      
      fetch("http://localhost:5000/api/users/"+ id +"/inc", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(alert("Check-in successful!"))
        .catch(error => console.log('error', error));
    }
    else{
      alert("Check-in unsuccessful: You are already checked in for this event.")
    }
  }

  function handleClick(_id){
    var raw = JSON.stringify({"googleId": _id, "userId": id})
    
    var requestOptions = {
      method: 'POST',
      body: raw,
      headers: {'Content-Type':'application/json'},
      mode: 'cors',
      redirect: 'follow'
    };

    fetch("http://localhost:5000/api/events/attend", requestOptions)
      .then(response => response.json())
      .then((result) => {
        incrementPts(result.nModified); console.log(result);
      })
      .catch(error => console.log('error', error));
  }

  async function loadCurrentEvents(){
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
          setEvents(response.result.items)
          console.log('EVENTS: ', events)
          setLoaded(true);
        })
      })
    })
    
  }
  
  if(!loaded){
     loadCurrentEvents();
  }

  return (
    isAuthenticated && (
    <div>
        <h1 style={{ textAlign: "center" }}>Current Events</h1>
        <h1></h1>
        { events &&
          <ul>
            {
              events.map(function(event){
                return (
                  <>
                    <div className="event-list">
                      {event.summary}
                      <button
                        className="checkin-btn-smaller"
                        style={{float: "right"}}
                        onClick={() => handleClick(event.id)}
                      >Check In</button>
                    </div>
                  </>
                )
              })
            }
          </ul>
        }
      </div>
    )
  );
};

export default CheckIn;
