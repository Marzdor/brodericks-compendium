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

const Mobile = props => {
  const projectEle = [];

  if (!props.isLoading) {
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
              src={image[project.imageBaseName + "_small.png"]}
              alt="Thumbnail of website."
            />
          </a>
          <div className="container-tags">{tagEle}</div>
          <p className="text-desc">{project.description}</p>
          <div>
            <button id="left" onClick={props.switchEle} className="btn-nav">
              &lt;
            </button>
            <button id="right" onClick={props.switchEle} className="btn-nav">
              &gt;
            </button>
          </div>
        </section>
      );
    });
  }

  return <div>{projectEle[props.curIndex]}</div>;
};

export default Mobile;
