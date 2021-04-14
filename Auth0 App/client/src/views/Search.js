import React, { Component, useState } from "react";
import AppBar from "../components/AppBar.js";
import { Form, Col } from "react-bootstrap";

const Search = () => {
  const [name, setName] = useState("");
  function searchUsers(searchName) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/users/name/" + searchName, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <AppBar />
      <h1 style={{ textAlign: "center" }}>Search</h1>
      <br />

      <Form>
        <Form.Row className="align-items-center">
          <Col sm={8} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" srOnly>
              Name
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="Search for a Member"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>

          <Col xs="auto" className="my-1">
            <button
              className="btn-smaller"
              type="button"
              onClick={() => searchUsers(name)}
            >
              Search
            </button>
          </Col>
          <Col xs="auto" className="my-1">
            <button
              type="button"
              className="btn-smaller"
              // {*/button not linked to route */}
            >
              Reset Points
            </button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};

export default Search;
