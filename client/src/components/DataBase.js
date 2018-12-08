import React, { Component } from "react";
import Filter from "./Filter";
import PlantsBody from "./PlantsBody";

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filters: {
        lar: [false, "Arctic"],
        lci: [false, "Cities"],
        lco: [false, "Coastal"],
        lde: [false, "Deserts"],
        lfo: [false, "Forests"],
        lju: [false, "Jungles"],
        lmo: [false, "Mountains"],
        loc: [false, "Oceans"],
        lpl: [false, "Plains"],
        lri: [false, "Rivers"],
        lsw: [false, "Swamps"],
        lud: [false, "Underdark/Caves"],
        rvc: [false, "Very Common"],
        rco: [false, "Common"],
        ruc: [false, "Uncommon"],
        rra: [false, "Rare"],
        rvr: [false, "Very Rare"],
        rle: [false, "Legendary"]
      },
      isLoading: true
    };
    this.filterClick = this.filterClick.bind(this);
  }

  componentDidMount() {
    fetch("/api/plants")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ data: data, isLoading: false });
      });
  }

  filterClick(e) {
    const filters = { ...this.state.filters };

    filters[e.target.id][0] = !this.state.filters[e.target.id][0];
    this.setState({ filters });
  }

  render() {
    return (
      <div className="container">
        <Filter filterClick={this.filterClick} />
        {!this.state.isLoading && (
          <PlantsBody
            plantData={this.state.data}
            filters={this.state.filters}
          />
        )}
      </div>
    );
  }
}

export default DataBase;
