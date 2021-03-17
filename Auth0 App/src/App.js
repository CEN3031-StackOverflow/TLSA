import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router
} from 'react-router-dom';

import React from 'react';
import './App.css';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import LandingPage from './views/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      {/* Auth0 Setup from https://www.youtube.com/watch?v=MqczHS3Z2bc&list=LL&index=10 */}
      <Router>
        <Route exact path="/">
          <Redirect to="/LandingPage"/>
        </Route>

        <Route exact path="/LandingPage" render={(props) => <LandingPage {...props}/>}/>
        <LogoutButton />
        <Profile />
      </Router>
    </>
  );
}

export default App;
