import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [pts, setPts] = useState();
  const [email, setEmail] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");

  var id = user.sub.substring(6, user.sub.length)

  function getUserInfo(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5000/api/users/" + id, requestOptions)
    .then(response => response.json())
    .then((result) => { setPts(result.points);
                        setGivenName(result.given_name);
                        setFamilyName(result.family_name);
                        setEmail(result.email)
                      })
    .catch(error => console.log('error', error));
  }

  getUserInfo();

  return (
    isAuthenticated && (
      <div style={{ textAlign: "center",
                    borderStyle: "solid",
                    borderRadius: "15px",
                    padding: "50px",
                    marginLeft:"25vw",
                    marginRight:"25vw"
                  }}>
        <h4 style={{marginBottom: "50px"}}>
          {"Name: "}
          <text>&emsp;</text>
          {givenName + " "+ familyName}
        </h4>

        <h4 style={{marginBottom: "50px"}}>
          {"Email: "}
          <text>&emsp;</text>
          {email}
        </h4>
        
        <h4>
        {"Points: "}
          <text>&emsp;</text>
          {pts}
        </h4>

      </div>
    )
  );
};

export default Profile;