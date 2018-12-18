import React from "react";

const Materials = props => {
  // Create Source Material elements
  const materialEle = [];
  props.data.forEach(ele => {
    materialEle.push(
      <div className="materials" key={ele.name}>
        <h3 className="materials-name">
          <a href={ele.url}>{ele.name} </a>
        </h3>
        <h4 className="materials-by">By: {ele.by}</h4>
      </div>
    );
  });
  //
  return (
    <section className="container-materials">
      <h2 className="home-title">Included Source Materials</h2>
      <div className="container-materials-sub">{materialEle}</div>
    </section>
  );
};

export default Materials;
