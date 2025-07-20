// src/App.jsx
import UserContext from "./context/UserContext";
import MainContent from "./components/MainContent";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <MainContent />
    </UserContext.Provider>
  );
}

export default App;
