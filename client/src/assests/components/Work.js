import React, { Component } from "react";

import Projects from "./Projects";
import Mobile from "./Mobile";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: "work",
      projects: [],
      mobile: false,
      curIndex: 0
    };
    this.switchEle = this.switchEle.bind(this);
  }

  componentDidMount() {
    fetch("/api/projects")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ projects: data, isLoading: false });
      });

    if (
      /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      if (
        /iPad/i.test(navigator.userAgent) &&
        document.documentElement.clientWidth >= 1024
      ) {
        this.setState({ mobile: false });
      } else {
        this.setState({ mobile: true });
      }
    }
    document
      .querySelector(".container-work")
      .classList.add("container-work-PRO");
    document
      .querySelector(".container-work")
      .classList.remove("container-work");
  }

  // Switch project being displayed
  switchEle(e) {
    let nextIndex;
    const len = this.state.projects.length;
    const cur = this.state.curIndex;
    switch (e.target.id) {
      case "left":
        if (this.state.curIndex === 0) {
          nextIndex = len - 1;
        } else {
          nextIndex = cur - 1;
        }
        break;
      case "right":
        if (cur + 1 === len) {
          nextIndex = 0;
        } else {
          nextIndex = cur + 1;
        }
        break;
      default:
        break;
    }

    this.setState({ curIndex: nextIndex });
  }
  //

  render() {
    return (
      <div>
        {this.state.mobile ? (
          <Mobile
            projects={this.state.projects}
            isLoading={this.state.isLoading}
            curIndex={this.state.curIndex}
            switchEle={this.switchEle}
          />
        ) : (
          <Projects
            projects={this.state.projects}
            isLoading={this.state.isLoading}
            page={this.state.page}
          />
        )}
      </div>
    );
  }
}

export default Work;
