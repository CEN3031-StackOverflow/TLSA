import React from "react";
import AppBar from "../components/AppBar.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Col} from "react-bootstrap";

const Search = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
<<<<<<< Updated upstream
    <>
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
            />
          </Col>

          <Col xs="auto" className="my-1">
            <button
              className="btn-smaller"

              // {*/button not linked to route */}
            >
              Search
            </button>
          </Col>
          <Col xs="auto" className="my-1">
            <button
              className="btn-smaller"
              // {*/button not linked to route */}
            >
              Reset Points
            </button>
          </Col>
        </Form.Row>
      </Form>
    </>
=======
      <>
        <h1 style={{ textAlign: "center" }}>Search</h1>
        <br />
        <Form style={{  marginLeft: "16vw", marginRight: "16vw"}}>
          <Form.Row className="align-items-center">
              <Form.Control
                id="inlineFormInputName"
                placeholder="Search for a Member"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{width: "50vw"}}
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
>>>>>>> Stashed changes
    )
  );
};

export default Search;
