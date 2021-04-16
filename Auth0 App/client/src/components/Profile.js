import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div style={{ textAlign: "center"}}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.email}</h2>
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  );
};

export default Profile;