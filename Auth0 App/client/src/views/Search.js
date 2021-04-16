import React, { Component, useState } from "react";
import AppBar from "../components/AppBar.js";
import { Form, Col, Container, Row } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Search = () => {
  const { user, isAuthenticated } = useAuth0();
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  function searchUsers(searchName) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/users/name/" + searchName, requestOptions)
      .then((response) => response.text())
      .then((result) => setResults(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }

  async function pointReset(searchID) {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    await fetch(
      "http://localhost:5000/api/users/" + searchID + "/reset",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(results))
      .catch((error) => console.log("error", error));
    searchUsers(name);
  }

  return (
    isAuthenticated && (
      <>
        <h1 style={{ textAlign: "center" }}>Search</h1>
        <br />

        <Form>
          <Form.Row className="align-items-center">
            <Col sm={11} className="my-1">
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
            <Col xs="auto" className="my-1"></Col>
          </Form.Row>
        </Form>
        <br />

        {results &&
          results.map((result, idx) => {
            return (
              <>
                <Container
                  className="results"
                  style={{ backgroundColor: "white" }}
                  fluid
                >
                  <Row>
                    <Col>
                      <h3
                        style={{ display: "inline", color: "#151c48" }}
                        id={`person${idx}`}
                      >
                        {result.given_name}
                      </h3>
                      <h4
                        style={{
                          display: "inline",
                          float: "right",
                          color: "#151c48",
                        }}
                        id={`points${idx}`}
                      >
                        {result.points}
                      </h4>
                      <br />
                      <button
                        style={{
                          display: "block",
                          float: "right",
                        }}
                        type="button"
                        className="btn-smaller"
                        onClick={() => pointReset(result._id)}
                      >
                        Reset Points
                      </button>
                    </Col>
                  </Row>
                </Container>
                <br />
              </>
            );
          })}
      </>
    )
  );
};

export default Search;
