import React, { Component } from "react";
import Filter from "./Filter";

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("/api/plants")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <section>
        <Filter />
      </section>
    );
  }
}

export default DataBase;
