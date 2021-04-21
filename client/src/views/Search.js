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

    fetch("/api/users/name/" + searchName, requestOptions)
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
      "/api/users/" + searchID + "/reset",
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
      <Form style={{  marginLeft: "23vw"}}>
        <Form.Row className="align-items-center">
            <Form.Control
              id="inlineFormInputName"
              placeholder="Search for a Member"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{width: "40vw", marginRight: "50px"}}
            />
            <button
              className="btn-smaller"
              style={{fontSize: "19px", padding: "9px"}}
              type="button"
              onClick={() => searchUsers(name)}
            >
              Search
            </button>
        </Form.Row>
      </Form>

      {results &&
        results.map((result, idx) => {
          return (
            <div className="event-list">
              {result.given_name + " " + result.family_name + ", "}
              <text>&emsp;</text>
              {result.points}
              <button
                style={{
                  display: "block",
                  float: "right",
                }}
                type="button"
                className="checkin-btn-smaller"
                onClick={() => pointReset(result._id)}
              >
                Reset Points
              </button>
            </div>
          );
        })}
    </>
    )
  );
};

export default Search;
