import React from "react";
import AppBar from "../components/AppBar.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Col} from "react-bootstrap";

const Search = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
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
    )
  );
};

export default Search;
