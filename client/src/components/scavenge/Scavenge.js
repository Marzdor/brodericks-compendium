import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Scavenge extends Component {
  constructor(props) {
    super(props);

    this.selected = this.props.scavenge.selected;
    this.tableToUse = this.props.scavenge.difficultyOptions[
      this.selected.difficulty
    ];
    this.criteria = { rarity: "", location: this.selected.location };

    this.setup = this.setup.bind(this);
    this.setResult = this.setResult.bind(this);
  }
  componentDidMount() {
    // Check if any options are not set
    if (this.selected.location === "") {
      this.props.history.push("/scavenge/location");
    } else if (this.selected.difficulty === "") {
      this.props.history.push("/scavenge/difficulty");
    } else if (this.selected.mode === "") {
      this.props.history.push("/scavenge/mode");
    } else {
      this.setup();
    }
    //
  }
  setup() {
    const rolls = this.selected.rolls;

    switch (this.selected.mode) {
      case "Disadvantage":
        this.setResult(Math.min(rolls.first, rolls.second));
        break;
      case "Normal":
        this.setResult(this.selected.rolls.first);
        break;
      case "Advantage":
        this.setResult(Math.max(rolls.first, rolls.second));
        break;
      default:
        console.log("error: " + this.selected.mode);
        break;
    }
  }

  setResult(roll) {
    let result;
    switch (true) {
      case roll >= this.tableToUse[0][0] && roll <= this.tableToUse[0][1]:
        result = this.tableToUse[0][2];
        break;
      case roll >= this.tableToUse[1][0] && roll <= this.tableToUse[1][1]:
        result = this.tableToUse[1][2];
        break;
      case roll >= this.tableToUse[2][0] && roll <= this.tableToUse[2][1]:
        result = this.tableToUse[2][2];
        break;
      case roll >= this.tableToUse[3][0] && roll <= this.tableToUse[3][1]:
        result = this.tableToUse[3][2];
        break;
      case roll >= this.tableToUse[4][0] && roll <= this.tableToUse[4][1]:
        result = this.tableToUse[4][2];
        break;
      case roll >= this.tableToUse[5][0] && roll <= this.tableToUse[5][1]:
        result = this.tableToUse[5][2];
        break;
      default:
        console.log("error: " + roll);
    }
    this.criteria.rarity = result;
  }

  // TODO get random plant based on result
  render() {
    return <div>Scavenge</div>;
  }
}

export default withRouter(Scavenge);
