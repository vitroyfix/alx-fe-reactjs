// src/components/WelcomeMessage.jsx
import { useContext } from "react";
import UserContext from "../context/UserContext";

function WelcomeMessage() {
  const { name } = useContext(UserContext);

  return (
    <h1 style={{ marginBottom: "1rem" }}>Welcome back, {name}!</h1>
  );
}

export default WelcomeMessage;
