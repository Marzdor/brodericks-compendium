import React, { Component } from "react";
import Materials from "./Materials";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("/api/materials")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ data: data, isLoading: false });
      });
  }

  render() {
    return (
      <section className="container">
        <h1 className="home-title">
          Broderick’s Compendium: Plants and Fungi Across the Realm 2.0
        </h1>
        <section>
          <p className="home-desc">
            This version of the guide, includes the full plant guide with (by my
            count) 640* fantasy plant and fungal species for use in adventuring
            and exploration throughout Faerun and beyond. The other major
            updates for this version are the Wizards of the Coast creative
            licensing.
          </p>
          <p className="home-desc--error">
            * I have a count of 639. Not sure which one I am missing.
          </p>
        </section>
        {!this.state.isLoading && <Materials data={this.state.data} />}
      </section>
    );
  }
}

export default Home;
