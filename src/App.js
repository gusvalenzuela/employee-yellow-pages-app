import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper/";
import Homepage from "./pages/homepage.js";
import Directory from "./pages/directory.js";

function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/directory" component={Directory} />
      </Wrapper>
    </Router>
  );
}

export default App;
