import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

class Scavenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.selected = this.props.scavenge.selected;
    this.tableToUse = this.props.scavenge.difficultyOptions[
      this.selected.difficulty
    ];
    this.criteria = { rarity: "", location: this.selected.location };
    this.foundPlant = {};

    this.setup = this.setup.bind(this);
    this.setResult = this.setResult.bind(this);
  }
  componentDidMount() {
    // Check if any options are not set
    // If one is missing redirect to that page
    if (this.selected.location === "") {
      this.props.history.push("/scavenge/location");
    } else if (this.selected.difficulty === "") {
      this.props.history.push("/scavenge/difficulty");
    } else if (this.selected.mode === "") {
      this.props.history.push("/scavenge/mode");
    } else {
      this.setup();

      this.setState({ isLoading: false });
    }
    //
  }
  // Setup everything needed to get random plant
  setup() {
    // Determine what roll to use
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
    //
    // Filter Plants based on Criteria
    const filteredPlants = [];
    this.props.plants.forEach(plant => {
      if (
        plant.rarity === this.criteria.rarity &&
        plant.location.indexOf(this.criteria.location) >= 0
      ) {
        filteredPlants.push(plant);
      }
    });
    //
    // Get random plant from filtered list
    let randomIndex;
    if (filteredPlants.length === 0) {
      randomIndex = 0;
    } else {
      randomIndex = Math.round(Math.random() * (filteredPlants.length - 1) + 1);
    }
    this.foundPlant = filteredPlants[randomIndex];
    //
    console.log(this.selected);
    console.log(filteredPlants);
    console.log(rolls);
    console.log(this.criteria.rarity);
    // TODO handle errors
  }
  //
  // set rarity based on dice role
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
  //
  render() {
    return (
      <section>
        <h2>{this.foundPlant.name}</h2>
        <h3>{this.foundPlant.rarity}</h3>
        <h3>{this.foundPlant.location}</h3>
        <ReactMarkdown source={this.foundPlant.description} />
        {/* TODO make reroll and reset links work */}
        <Link to="/scavenge">Reroll</Link>
        <Link to="/scavenge">Reset</Link>
      </section>
    );
  }
}

export default withRouter(Scavenge);
