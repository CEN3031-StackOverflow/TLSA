/* Make sure this is only accessible to admins!!! */

import React from "react";
import AppBar from "../components/AppBar";
import { Form, Button, Row, Col } from "react-bootstrap";

const CreateEvent = () => {
  return (
    <>
      <AppBar />
      <h1 style={{ textAlign: "center" }}> Create Event </h1>
      <br />

      <Form>
        <Form.Group as={Row} controlId="EventName">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Event Name
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="event-name" placeholder="Event Name" />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="EventDate">
        <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Date
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="date" placeholder="Date" />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="StartTime">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Start Time
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="start-time" placeholder="Start Time" />
          </Col>
          <Col sm={2}></Col>  
        </Form.Group>

        <Form.Group as={Row} controlId="EndTime">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            End Time
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="end-time" placeholder="End Time" />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="Location">
          <Col sm={2}></Col>
          <Form.Label column sm={2}>
            Location
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="location" placeholder="Location" />
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
              rows={3}
            />
          </Col>
          <Col sm={2}></Col>
        </Form.Group>

        {/* Button has no function */}
        <div className="center">
          <button
            className="btn"
            style={{ marginLeft: "auto" }}
            variant="primary"
            type="submit"
          >
            Create
          </button>
        </div>
      </Form>
    </>
  );
};

export default CreateEvent;
