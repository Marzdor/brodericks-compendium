import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Scavenge extends Component {
  componentDidMount() {
    // Check if any options skipped
    for (let key in this.props.selected) {
      if (this.props.selected[key] === "") {
        this.props.history.push("/scavenge/" + key);
      }
    }
  }
  render() {
    return <div>Scavenge</div>;
  }
}

export default withRouter(Scavenge);
