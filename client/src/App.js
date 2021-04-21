import {
  Route,
  //Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import React from "react";
import CreateEvent from "./views/CreateEvent";
import Events from "./views/Events";
import LandingPage from "./views/LandingPage";
import MyAccount from "./views/MyAccount";
import Search from "./views/Search";
import CheckIn from "./views/CheckIn";
import AppBar from "./components/AppBar";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* Auth0 Setup from https://www.youtube.com/watch?v=MqczHS3Z2bc&list=LL&index=10 */}
      <AppBar />
      <Router>
        <Route exact path="/">
          <Redirect to="/LandingPage" />{" "}
        </Route>
        <Route exact path="/LandingPage" render={(props) => <LandingPage {...props} />}/>
        <Route exact path="/CreateEvent" render={(props) => <CreateEvent {...props} />}/>
        <Route exact path="/Events" render={(props) => <Events {...props} />} />
        <Route exact path="/MyAccount" render={(props) => <MyAccount {...props} />}/>
        <Route exact path="/Search" render={(props) => <Search {...props} />} />
        <Route exact path="/CheckIn" render={(props) => <CheckIn {...props} />} />

      </Router>
    </>
  );
}

export default App;
