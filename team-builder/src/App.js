import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";


function App() {
  const [users, setusers] = useState([
    { name: "nick", email: "nick@email.com", role: "web", teamName: "UX live" }
  ]);

  const addNewUser = user => {
    setusers([...users, user]);
  };
  return (
    <div className="App">
      <h1>Team Building</h1>
      <Form addNewUser={addNewUser} />
    </div>
  );
}

export default App;
