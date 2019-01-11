import React from "react";

// import all images
function importAllImages(image) {
  let images = {};
  image.keys().map((item, index) => {
    return (images[item.replace("./", "")] = image(item));
  });
  return images;
}
const image = importAllImages(require.context("../images", false, /\.png$/));
//

const Projects = props => {
  const projectEle = [];

  if (!props.isLoading) {
    if (props.page === "admin") {
      props.projects.forEach(project => {
        projectEle.push(
          <section id={project._id} key={project.siteName}>
            <h4>{project.siteName}</h4>
            <button
              id="edit"
              className="modal-form-btn"
              onClick={props.modalControle}
            >
              Edit
            </button>
            <button
              id={project._id}
              className="modal-form-btn"
              onClick={deleteProject}
            >
              Delete
            </button>
          </section>
        );
      });
    } else {
      props.projects.forEach(project => {
        // create tage elements
        const tagEle = [];
        project.tags.forEach(tag => {
          tagEle.push(
            <h5 className="text-tag" key={project.siteName + " " + tag}>
              {tag}
            </h5>
          );
        });
        //

        projectEle.push(
          <section className="container-project" key={project.siteName}>
            <h4 className="text-title-sub">{project.siteName}</h4>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                className="container-img"
                src={image[project.imageBaseName + ".png"]}
                alt="Thumbnail of website."
              />
            </a>
            <div className="container-tags">{tagEle}</div>
            <p className="text-desc">{project.description}</p>
          </section>
        );
      });
    }
  }

  function deleteProject(e) {
    fetch("/api/projects/" + e.target.id, { method: "delete" }).then(res => {
      res.json();
    });
    window.location = "/admin";
  }

  return <div className="container container-work">{projectEle}</div>;
};

export default Projects;
