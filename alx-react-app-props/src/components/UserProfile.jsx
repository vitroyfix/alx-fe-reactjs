// src/components/UserProfile.jsx
import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
