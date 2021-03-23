import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        style={{ color: "#151C48", background: "#f4ba00", fontWeight: "bold" }}
        onClick={() => logout()}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
