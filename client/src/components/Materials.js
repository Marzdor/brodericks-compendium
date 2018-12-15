import React from "react";

const Materials = props => {
  // Create Source Material elements
  const materialEle = [];
  props.data.forEach(ele => {
    materialEle.push(
      <div key={ele.name} className="materials">
        <h3 className="materials-by">By: {ele.by}</h3>

        <h4 className="materials-link">
          <a href={ele.url}>{ele.name} </a>
        </h4>
      </div>
    );
  });
  //
  return (
    <section className="container-material">
      <h2 className="materials-title">Included Source Materials</h2>
      {materialEle}
    </section>
  );
};

export default Materials;
