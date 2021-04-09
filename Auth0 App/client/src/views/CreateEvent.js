/* Make sure this is only accessible to admins!!! */

import React, { useState } from "react";
import AppBar from "../components/AppBar";
import { Form, Button, Row, Col } from "react-bootstrap";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  /* Google Calendar API Add Event Tutorial: https://www.youtube.com/watch?v=zaRUq1siZZo */

  var gapi = window.gapi;
  var CLIENT_ID =
    "693133513733-l7kcttogcc3c2bkkt9m67v8kjrmfnvck.apps.googleusercontent.com";
  var API_KEY = "AIzaSyCojPB4nfWrpOB9Bca4SnHGInatjYrwjjU";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  function handleClick() {
    gapi.load("client:auth2", () => {
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
          console.log("hi");
          var event = {
            summary: name,
            location: location,
            description: description,
            start: {
              dateTime: "2021-04-28T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2021-04-28T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: "tlsa.webapp@gmail.com",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });

          /*
            Uncomment the following block to get events
        */
          /*
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
        });
    });
  }

  return (
    <>
      <AppBar />
      <h1 style={{ textAlign: "center" }}> Create Event </h1>
      <br />

      <Form>
        <Form.Group as={Row} controlId="EventName">
          <Form.Label column sm={2}>
            Event Name
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="event-name"
              placeholder="Event Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
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
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="StartTime">
          <Form.Label column sm={2}>
            Start Time
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="start-time"
              placeholder="Start Time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="EndTime">
          <Form.Label column sm={2}>
            End Time
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="end-time"
              placeholder="End Time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="Location">
          <Form.Label column sm={2}>
            Location
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="Description">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              type="description"
              placeholder="Event Description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Form.Group>
      </Form>

      <div className="center">
        <button className="btn" onClick={handleClick}>
          {" "}
          Create{" "}
        </button>
      </div>
    </>
  );
};

export default CreateEvent;
