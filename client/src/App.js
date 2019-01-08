import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Splash from "./components/Splash";
import Browse from "./components/Browse";
import Scavenge from "./components/Scavenge";
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
      plants: [],
      names: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("/api/plants")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const newNames = data.reduce((acc, cur) => {
          return acc.concat(cur.name);
        }, []);

        this.setState({
          plants: data,
          names: newNames,
          isLoading: false
        });
      });
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route
              path="/browse"
              render={props => <Browse {...props} info={this.state} />}
            />
            <Route path="/scavenge" component={Scavenge} />
            <Route path="/login" component={Login} />
            <PrivateRoute
              path="/edit"
              component={Edit}
              names={this.state.names}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
