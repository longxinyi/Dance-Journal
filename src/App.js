import "./App.css";
import React from "react";
import Entry from "./components/Entry";
import Header from "./components/Layout/Header.js";
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Entry></Entry>
    </React.Fragment>
  );
}

export default App;
