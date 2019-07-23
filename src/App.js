import React from "react";
import "./App.css";

import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Main />
      </div>
    </div>
  );
}

export default App;
