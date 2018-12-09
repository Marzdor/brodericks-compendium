import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import DataBase from "./components/DataBase";
import Scavenging from "./components/Scavenging";
import Error from "./components/Error";
import Nav from "./components/Nav";
import Edit from "./components/Edit";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/plants&fungi" component={DataBase} />
            <Route path="/scavenging" component={Scavenging} />
            <Route path="/edit" component={Edit} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
