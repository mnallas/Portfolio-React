import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
