import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <text>&emsp;</text>
        <button
          className="btn-smaller"
          style={{ height: "38px" }}
          onClick={() => logout()}
        >
          Log Out
        </button>
      </>
    )
  );
};

export default LogoutButton;
