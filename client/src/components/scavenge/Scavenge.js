import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Scavenge extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.selected = this.props.scavenge.selected;
    this.tableToUse = this.props.scavenge.difficultyOptions[
      this.selected.difficulty
    ];

    this.setResult = this.setResult.bind(this);
  }
  componentDidMount() {
    // Check if any options skipped
    if (this.selected.location === "") {
      this.props.history.push("/scavenge/location");
    } else if (this.selected.difficulty === "") {
      this.props.history.push("/scavenge/difficulty");
    } else if (this.selected.mode === "") {
      this.props.history.push("/scavenge/mode");
    } else {
      this.setResult(this.props.scavenge.selected.rolls.first);
    }
    //
  }

  setResult(roll) {
    let result;
    switch (true) {
      case roll >= this.tableToUse[0][0] && roll <= this.tableToUse[0][1]:
        result = roll + " - " + this.tableToUse[0][2];
        break;
      case roll >= this.tableToUse[1][0] && roll <= this.tableToUse[1][1]:
        result = roll + " - " + this.tableToUse[1][2];
        break;
      case roll >= this.tableToUse[2][0] && roll <= this.tableToUse[2][1]:
        result = roll + " - " + this.tableToUse[2][2];
        break;
      case roll >= this.tableToUse[3][0] && roll <= this.tableToUse[3][1]:
        result = roll + " - " + this.tableToUse[3][2];
        break;
      case roll >= this.tableToUse[4][0] && roll <= this.tableToUse[4][1]:
        result = roll + " - " + this.tableToUse[4][2];
        break;
      case roll >= this.tableToUse[5][0] && roll <= this.tableToUse[5][1]:
        result = roll + " - " + this.tableToUse[5][2];
        break;
      default:
        console.log("error: " + roll);
    }
    console.log(result);
  }
  // TODO set mode
  // TODO get random plant based on result
  render() {
    return <div>Scavenge</div>;
  }
}

export default withRouter(Scavenge);
