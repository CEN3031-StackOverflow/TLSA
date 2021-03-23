import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className='login-btn-position'>
        <button className = "btn" onClick={() => loginWithRedirect()}>
          Log In / Sign Up
        </button>
      </div>
    )
      
  )
}

export default LoginButton
