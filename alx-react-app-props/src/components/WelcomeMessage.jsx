// src/components/WelcomeMessage.jsx
import { useContext } from "react";
import UserContext from "../context/UserContext";

function WelcomeMessage() {
  const user = useContext(UserContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Welcome, {user.name}!</h1>
    </div>
  );
}

export default WelcomeMessage;
