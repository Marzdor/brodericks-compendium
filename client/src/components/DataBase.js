import React, { Component } from "react";
import Filter from "./Filter";
import PlantsBody from "./PlantsBody";

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filters: {
        a: false,
        ci: false,
        co: false,
        d: false,
        f: false,
        j: false,
        m: false,
        o: false,
        p: false,
        ri: false,
        s: false,
        ud: false,
        vc: false,
        c: false,
        uc: false,
        ra: false,
        vr: false,
        l: false
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
    console.log(filters);
    filters[e.target.id] = !this.state.filters[e.target.id];
    this.setState({ filters });
  }

  render() {
    return (
      <div>
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
