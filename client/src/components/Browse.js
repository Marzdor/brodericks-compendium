import React, { Component } from "react";
import Filter from "./Filter";
import PlantsBody from "./PlantsBody";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNames: [],
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
      }
    };
    this.filterClick = this.filterClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  // flip state of filter on click
  filterClick(e) {
    const newFilters = { ...this.state.filters };

    newFilters[e.target.id][0] = !this.state.filters[e.target.id][0];
    this.setState({ filters: newFilters });
  }
  //
  // Filter list based on search
  handleSearch(e) {
    const input = e.target.previousSibling.value;
    let newNameList = [];
    this.props.info.names.map(algo => {
      input.split(" ").map(name => {
        if (algo.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
          newNameList.push(algo);
        }
        return true;
      });
      return true;
    });

    this.setState({ filteredNames: newNameList });
  }
  //

  render() {
    return (
      <section className="container">
        <Filter
          filterClick={this.filterClick}
          searchClick={this.handleSearch}
          plantNames={this.props.info.names}
        />
        <PlantsBody
          plants={this.props.info.plants}
          filteredNames={this.state.filteredNames}
          filters={this.state.filters}
        />
      </section>
    );
  }
}

export default Browse;
