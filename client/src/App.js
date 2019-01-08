import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Splash from "./components/Splash";
import Browse from "./components/Browse";
import Scavenge from "./components/scavenge/Scavenge";
import ScavengeLoc from "./components/scavenge/Location";
import ScavengeDiff from "./components/scavenge/Difficulty";
import ScavengeRoll from "./components/scavenge/Roll";
import Error from "./components/Error";
import Edit from "./components/Edit";

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    setTimeout(cb, 100);
    fetch("/api/plants/auth")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.isAuthenticated = true;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container container-splash">
        <button className="btn-splash" onClick={this.login}>
          Please Sign In
        </button>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        plants: [],
        names: []
      },
      scavenge: {
        locations: [
          "Arctic",
          "Cities",
          "Coastal",
          "Deserts",
          "Forests",
          "Jungles",
          "Mountains",
          "Oceans",
          "Plains",
          "Rivers",
          "Swamps",
          "Underdark/Caves"
        ],
        selected: {
          location: "",
          difficulty: "",
          roll: ""
        }
      },
      isLoading: true
    };
    this.locClicked = this.locClicked.bind(this);
    this.diffClicked = this.diffClicked.bind(this);
    this.rollClicked = this.rollClicked.bind(this);
  }
  componentDidMount() {
    fetch("/api/plants")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const newData = {};
        newData.names = data.reduce((acc, cur) => {
          return acc.concat(cur.name);
        }, []);
        newData.plants = data;
        this.setState({
          data: newData,
          isLoading: false
        });
      });
  }
  locClicked(e) {
    const updatedScavenge = this.state.scavenge;
    updatedScavenge.selected.location = e.target.innerHTML;
    this.setState({ scavenge: updatedScavenge });
  }
  diffClicked(e) {
    const updatedScavenge = this.state.scavenge;
    updatedScavenge.selected.difficulty = e.target.id;
    this.setState({ scavenge: updatedScavenge });
  }
  rollClicked(e) {
    const updatedScavenge = this.state.scavenge;
    updatedScavenge.selected.roll = e.target.innerHTML;
    this.setState({ scavenge: updatedScavenge });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route
            path="/browse"
            render={props => <Browse {...props} info={this.state.data} />}
          />
          <Route
            exact
            path="/scavenge"
            render={props => (
              <Scavenge {...props} selected={this.state.scavenge.selected} />
            )}
          />
          <Route
            path="/scavenge/location"
            render={props => (
              <ScavengeLoc
                {...props}
                locations={this.state.scavenge.locations}
                locClicked={this.locClicked}
              />
            )}
          />
          <Route
            path="/scavenge/difficulty"
            render={props => (
              <ScavengeDiff {...props} diffClicked={this.diffClicked} />
            )}
          />
          <Route
            path="/scavenge/roll"
            render={props => (
              <ScavengeRoll {...props} rollClicked={this.rollClicked} />
            )}
          />
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/edit"
            component={Edit}
            names={this.state.data.names}
          />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
