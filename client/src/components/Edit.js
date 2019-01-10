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
    // create options for dropdown element
    const options = [];
    this.props.names.forEach(plant => {
      options.push(<option key={"op: " + plant} value={plant} />);
    });
    //

    return (
      <div className="edit-container">
        <datalist id="op">{options}</datalist>
        <input
          id="search"
          autoComplete="off"
          list="op"
          placeholder="Enter Plant Name"
          className="edit-search"
        />
        <button className="edit-btn" onClick={this.search}>
          Search
        </button>
        <form
          action={"/api/plants/edit=" + this.state.id}
          method="post"
          className="edit-container-form"
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Plant Name"
            onChange={this.handleChange}
            autoComplete="off"
            className="edit-search"
          />
          <label>Rarity</label>
          <input
            type="text"
            name="rarity"
            value={this.state.rarity}
            placeholder="Plant Rarity"
            onChange={this.handleChange}
            autoComplete="off"
            className="edit-search"
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            placeholder="Plant Location"
            onChange={this.handleChange}
            autoComplete="off"
            className="edit-search"
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
          <input type="submit" value="Update" className="edit-btn-update" />
        </form>
        <div className="edit-container-preview">
          <ReactMarkdown source={this.state.description} />
        </div>
      </div>
    );
  }
}

export default Edit;
