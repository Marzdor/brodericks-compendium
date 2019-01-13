import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

class Scavenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      rarities: [
        "Very Common",
        "Common",
        "Uncommon",
        "Rare",
        "Very Rare",
        "Legendary"
      ]
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
    do {
      this.props.plants.forEach(plant => {
        if (
          plant.rarity === this.criteria.rarity &&
          plant.location.indexOf(this.criteria.location) >= 0
        ) {
          filteredPlants.push(plant);
        }
      });
      // If selected location has no plants of rolled rarity cycle rarity down untill location has plants
      if (filteredPlants.length === 0) {
        // handle ocean fringe case
        if (this.criteria.rarity === "Very Common") {
          filteredPlants.push({
            name: "None",
            rarity: "Very Common",
            location: this.criteria.location,
            description:
              this.criteria.location + " contain no Very Common plants."
          });
        } else {
          const curIndex = this.state.rarities.indexOf(this.criteria.rarity);
          this.criteria.rarity = this.state.rarities[curIndex - 1];
        }
        //
      }
    } while (filteredPlants.length === 0);
    //
    // Get random plant from filtered list
    let randomIndex;
    if (filteredPlants.length === 1) {
      randomIndex = 0;
    } else {
      randomIndex = Math.floor(Math.random() * filteredPlants.length);
    }
    this.foundPlant = filteredPlants[randomIndex];
    //
    console.log(this.selected);
    console.log(filteredPlants);
    console.log(rolls);
    console.log(randomIndex);
    console.log(this.criteria.rarity);
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
    // Create Location Elements
    const location = [];
    console.log(this.foundPlant.location);
    if (!this.state.isLoading) {
      this.foundPlant.location.forEach(el => {
        location.push(<p key={el}>{el}</p>);
      });
    }
    //
    return (
      <section className="scavenge-container">
        <h1>Here Is The Plant You Rolled</h1>
        <div className="scavenge-container-options">
          <h4>Your Location: {this.criteria.location}</h4>
          <h4>
            Your Difficulty:{" "}
            {this.selected.difficulty.charAt(0).toUpperCase() +
              this.selected.difficulty.slice(1)}
          </h4>
          <h4>Your Mode: {this.selected.mode}</h4>
          <h5>First Roll: {this.selected.rolls.first}</h5>
          <h5>Second Roll: {this.selected.rolls.second}</h5>
        </div>
        <h2 className="active-found">{this.foundPlant.name}</h2>
        <div className="plant-container-sub">
          <h3>{this.foundPlant.rarity}</h3>
          <h3 className="plant-container-loc">{location}</h3>
          <ReactMarkdown
            className="plant-desc"
            source={this.foundPlant.description}
          />
        </div>
        <div className="scavenge-container-sub">
          <p className="scavenge-desc-info">
            Advantage we take the higher roll | Disadvantage we take the lower |
            Normal we take the first.
          </p>
          <br />
          <p className="scavenge-desc-info">
            If for example you roll a Rare and there are no Rare Plants for the
            location you have chosen then in bumps you down 1 rarity untill a
            plant is found.
          </p>
          <Link
            className="scavenge-link"
            onClick={() => {
              window.location.reload();
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="scavenge-link"
            onClick={() => {
              window.location.reload();
            }}
            to="/scavenge"
          >
            Reset
          </Link>
        </div>
      </section>
    );
  }
}

export default withRouter(Scavenge);
