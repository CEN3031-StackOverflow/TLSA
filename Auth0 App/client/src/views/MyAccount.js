import React from "react";
import Profile from "../components/Profile.js";
import AppBar from "../components/AppBar.js";
import { Form, Button, Row, Col } from "react-bootstrap";
//import Logo from '../components/Logo.js';

const MyAccount = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>My Account</h1>
      <Profile />

      <div>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={1.5}>
              Change Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="new-password"
                placeholder="Enter New Password"
              />
            </Col>
          </Form.Group>

          <div className="center">
            <button
              className="btn-smaller"
              // {*/button not linked to route */}
            >
              Change Password
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default MyAccount;
