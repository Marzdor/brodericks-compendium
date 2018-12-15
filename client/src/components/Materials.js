import React from "react";

const Materials = props => {
  // Create Source Material elements
  const materialEle = [];
  props.data.forEach(ele => {
    materialEle.push(
      <div key={ele.name}>
        <h3 className="material-link">
          <a href={ele.url}>{ele.name}</a>
        </h3>
        <h4 className="material-by">By: {ele.by}</h4>
      </div>
    );
  });
  //
  return (
    <section className="container-material">
      <h2>Current Source Materials Include</h2>
      {materialEle}
    </section>
  );
};

export default Materials;
