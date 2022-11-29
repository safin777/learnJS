import "./App.css";
import React from "react";

import Nav from "./Components/Nav.jsx";
//import NavC from "./classComponents/NavC";
//import Profile from "./Components/Profile";
import Counter from "./Components/Counter"; 
import ConditionalCom from "./Components/ConditionalCom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Counter />
      <ConditionalCom/>
    </div>
  );
}

export default App;
