import React from "react";

const PlantsBody = props => {
  return (
    <div>
      <section>
        <h2>{props.plantData[0].name}</h2>
        <h3>{props.plantData[0].rarity}</h3>
        <h3>{props.plantData[0].location}</h3>
        <p>{props.plantData[0].description}</p>
      </section>
    </div>
  );
};

export default PlantsBody;
