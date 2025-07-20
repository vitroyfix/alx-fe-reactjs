// src/components/UserDetails.jsx
import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
