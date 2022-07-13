import React from "react";
import "./App.css";

import Map from "./components/Map";

const style = {
  height: "100vh",
  width: "100vw",
};

function App() {
  return (
    <div className="App" style={style}>
      <Map />
    </div>
  );
}

export default App;
