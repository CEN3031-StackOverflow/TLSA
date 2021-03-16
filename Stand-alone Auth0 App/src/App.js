import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      {/* Auth0 Setup from https://www.youtube.com/watch?v=MqczHS3Z2bc&list=LL&index=10 */}
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
