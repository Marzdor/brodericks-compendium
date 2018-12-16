import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      rarity: "",
      location: "",
      description: ""
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  search() {
    const plantName = document.querySelector("#search").value;
    fetch("/api/plants/edit=" + plantName)
      .then(res => {
        return res.json();
      })
      .then(plant => {
        this.setState({
          id: plant[0]._id,
          name: plant[0].name,
          rarity: plant[0].rarity,
          location: plant[0].location.toString(),
          description: plant[0].description
        });
      });
  }

  handleChange(e) {
    switch (e.target.name) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "rarity":
        this.setState({ rarity: e.target.value });
        break;
      case "location":
        this.setState({ location: e.target.value });
        break;
      case "description":
        this.setState({ description: e.target.value });
        break;
      default:
        console.log("target name : " + e.target.name + " not found");
    }
  }
  render() {
    return (
      <div>
        <input id="search" autoComplete="off" placeholder="Enter Plant Name" />
        <button onClick={this.search}>Search</button>
        <form
          action={"/api/plants/edit=" + this.state.id}
          method="post"
          className="container-edit"
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Plant Name"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label>Rarity</label>
          <input
            type="text"
            name="rarity"
            value={this.state.rarity}
            placeholder="Plant Rarity"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            placeholder="Plant Location"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label>Description</label>
          <textarea
            name="description"
            value={this.state.description}
            placeholder="Plant Description"
            onChange={this.handleChange}
            autoComplete="off"
            className="edit-desc"
          />
          <input type="submit" value="Update" className="edit-btn" />
        </form>
        <div id="divreview">
          <ReactMarkdown source={this.state.description} />
        </div>
      </div>
    );
  }
}

export default Edit;
