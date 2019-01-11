import React, { Component } from "react";

import Projects from "./Projects";
import Create from "./sub_admin/Create";
import Edit from "./sub_admin/Edit";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modals: { create: false, edit: false },
      isLoading: true,
      page: "admin",
      projects: [],
      editProject: {}
    };
    this.modalControle = this.modalControle.bind(this);
    this.search = this.search.bind(this);
    this.editChange = this.editChange.bind(this);
  }

  componentDidMount() {
    fetch("/api/projects")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ projects: data, isLoading: false });
      });
  }

  modalControle(e) {
    switch (e.target.id) {
      case "create":
        this.setState({ modals: { edit: false, create: true } });
        break;
      case "edit":
        this.search(e.target.parentElement.id);
        break;
      case "close":
        this.setState({
          modals: { create: false, edit: false },
          editProject: {}
        });
        break;
      default:
        console.log("Id not found: " + e.target.id);
        break;
    }
  }

  search(id) {
    fetch("/api/projects/edit=" + id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          modals: { create: false, edit: true },
          editProject: data
        });
      });
  }

  editChange(e) {
    const newProject = this.state.editProject;
    switch (e.target.name) {
      case "siteName":
        newProject.siteName = e.target.value;
        break;
      case "imageBaseName":
        newProject.imageBaseName = e.target.value;
        break;
      case "tags":
        newProject.tags = e.target.value;
        break;
      case "url":
        newProject.url = e.target.value;
        break;
      case "description":
        newProject.description = e.target.value;
        break;
      default:
        console.log("Id not found: " + e.target.id);
        break;
    }
    this.setState({ editProject: newProject });
  }

  render() {
    return (
      <section className="container container-img">
        <button
          id="create"
          className="modal-form-btn"
          onClick={this.modalControle}
        >
          Create New
        </button>
        {this.state.modals.create && (
          <Create modalControle={this.modalControle} />
        )}
        <Projects
          modalControle={this.modalControle}
          projects={this.state.projects}
          page={this.state.page}
        />
        {this.state.modals.edit && (
          <Edit
            project={this.state.editProject}
            editChange={this.editChange}
            modalControle={this.modalControle}
          />
        )}
      </section>
    );
  }
}

export default Admin;
