import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper/";
import Homepage from "./pages/homepage.js";
import Directory from "./pages/directory.js";
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <Router>
      <Jumbotron>
        <h1>The Employee Yellow Pages!</h1>
        <h3>They're good people, Brent.</h3>
      </Jumbotron>
      <Wrapper>
        <Route exact path="/" component={Directory} />
        <Route exact path="/home" component={Homepage} />
      </Wrapper>
    </Router>
  );
}

export default App;
