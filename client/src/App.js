import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Components
import Browse from "./assests/components/Browse";
import Edit from "./assests/components/Edit";
import Error from "./assests/components/Error";
import Scavenge from "./assests/components/scavenge/Scavenge";
import ScavengeDiff from "./assests/components/scavenge/Difficulty";
import ScavengeLoc from "./assests/components/scavenge/Location";
import ScavengeMode from "./assests/components/scavenge/Mode";
import Splash from "./assests/components/Splash";

// Private Route Logic
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
      <div>
        <button className="edit-btn" onClick={this.login}>
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
//

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        plants: [],
        names: []
      },
      scavenge: {
        difficultyOptions: {
          easy: [
            [1, 29, "Very Common"],
            [30, 57, "Common"],
            [56, 79, "Uncommon"],
            [80, 91, "Rare"],
            [92, 99, "Very Rare"],
            [100, 100, "Legendary"]
          ],
          medium: [
            [1, 53, "Very Common"],
            [54, 79, "Common"],
            [80, 91, "Uncommon"],
            [92, 96, "Rare"],
            [97, 99, "Very Rare"],
            [100, 100, "Legendary"]
          ],
          hard: [
            [1, 55, "Very Common"],
            [56, 81, "Common"],
            [82, 93, "Uncommon"],
            [94, 98, "Rare"],
            [99, 99, "Very Rare"],
            [100, 100, "Legendary"]
          ]
        },
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
          mode: "",
          rolls: { first: 0, second: 0 }
        }
      },
      isLoading: true
    };
    this.locClicked = this.locClicked.bind(this);
    this.diffClicked = this.diffClicked.bind(this);
    this.modeClicked = this.modeClicked.bind(this);
  }
  componentDidMount() {
    // Get all data
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
    //
  }
  // Set location
  locClicked(e) {
    const updatedScavenge = this.state.scavenge;
    updatedScavenge.selected.location = e.target.innerHTML;
    this.setState({ scavenge: updatedScavenge });
  }
  //
  // Set difficulty
  diffClicked(e) {
    const updatedScavenge = this.state.scavenge;
    updatedScavenge.selected.difficulty = e.target.id;
    // Make both rolls
    updatedScavenge.selected.rolls.first = Math.round(
      Math.random() * (100 - 1) + 1
    );
    updatedScavenge.selected.rolls.second = Math.round(
      Math.random() * (100 - 1) + 1
    );
    //
    this.setState({ scavenge: updatedScavenge });
  }
  //
  // Set Mode
  modeClicked(e) {
    const updatedScavenge = this.state.scavenge;
    updatedScavenge.selected.mode = e.target.innerHTML;
    this.setState({ scavenge: updatedScavenge });
  }
  //

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
              <Scavenge
                {...props}
                scavenge={this.state.scavenge}
                plants={this.state.data.plants}
              />
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
              <ScavengeDiff
                {...props}
                diffClicked={this.diffClicked}
                tableData={this.state.scavenge.difficultyOptions}
              />
            )}
          />
          <Route
            path="/scavenge/mode"
            render={props => (
              <ScavengeMode {...props} modeClicked={this.modeClicked} />
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
