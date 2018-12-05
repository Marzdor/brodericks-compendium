import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import DataBase from "./components/DataBase";
import Scavenging from "./components/Scavenging";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/plants&fungi">Plant & Fungi</Link>
            </li>
            <li>
              <Link to="/scavenging">Scavenging</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/plants&fungi" component={DataBase} />
          <Route path="/scavenging" component={Scavenging} />
        </div>
      </Router>
    );
  }
}

export default App;
