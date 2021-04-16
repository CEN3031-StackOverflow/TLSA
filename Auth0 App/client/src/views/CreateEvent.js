/* Make sure this is only accessible to admins!!! */

import React, { useState } from 'react';
import AppBar from "../components/AppBar";
import { Form, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const CreateEvent = () => {
  const { user, isAuthenticated } = useAuth0();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  /* Google Calendar API Add Event Tutorial: https://www.youtube.com/watch?v=zaRUq1siZZo */

  var gapi = window.gapi;
  // If need be, when you create a new OAuth 2.0 Client ID, make sure to name it "auth2".
  var CLIENT_ID = "693133513733-fg3r3s4t6q642fiqd9re0vklnu0pglm6.apps.googleusercontent.com";
  var API_KEY = "AIzaSyDDsGsEjfXNWhGImPNCagIdOQ8WIEcsmf8";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  function clear(){
    setName("");
    setDate("");
    setStart("");
    setEnd("");
    setLocation("");
    setDescription("");
  }

  function handleClick() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3");

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: name,
            location: location,
            description: description,
            start: {
              dateTime: date + "T" + start + ":00",
              timeZone: "America/New_York",
            },
            end: {
              dateTime: date + "T" + end + ":00",
              timeZone: "America/New_York",
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: "tlsa.webapp@gmail.com",
            resource: event,
          });

          request.execute((event) => {
            var raw = JSON.stringify({"googleId": event.id});

            var requestOptions = {
              method: 'POST',
              body: raw,
              headers: {'Content-Type':'application/json'},
              mode: 'cors',
              redirect: 'follow'
            };

            fetch("http://localhost:5000/api/events/new", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));

            clear();
          });

          /* Uncomment the following block to get events
        // get events
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
        */
    
      })
    })
  }

  return (
    isAuthenticated && (
    <>
      <h1 style={{ textAlign: "center" }}> Create Event </h1>
      <br />

      <Form>
        <Form.Group as={Row} controlId="EventName">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Event Name
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="event-name"
              placeholder="Event Name"
              value={name}
              onChange={e => setName(e.target.value)}
              />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="EventDate">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Date
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="date"
              placeholder="Date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="StartTime">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Start Time
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="start-time"
              placeholder="i.e. 09:00 for 9:00 AM"
              value={start}
              onChange={e => setStart(e.target.value)}
            />
          </Col>
          <Col sm={2}></Col>  
        </Form.Group>

        <Form.Group as={Row} controlId="EndTime">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            End Time
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="end-time"
              placeholder="i.e. 13:30 for 1:30 PM"
              value={end}
              onChange={e => setEnd(e.target.value)}
            />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="Location">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Location
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="location"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="Description">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              as="textarea"
              type="description"
              placeholder="Event Description"
              rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>
      </Form>

      <div className="center">
        <button className="btn-create" onClick={handleClick}> Create </button>
        <b/>
      </div>

      <h1> </h1>
      
      <h6 className="create-event-disclaimer"
          style={{color: "#a9a9a9"}}>
            Log into tlsa.webapp@gmail.com via pop-up.
      </h6>
      
    </>
    )
  );
};

export default CreateEvent;
