import React from "react";
import ReactMarkdown from "react-markdown";

const PlantsBody = props => {
  // Check if any filters are active
  const activeLoc = [];
  const activeRar = [];
  let rCount = 0;
  let lCount = 0;
  for (let key in props.filters) {
    if (key[0] === "l") {
      if (props.filters[key][0]) {
        activeLoc.push(props.filters[key][1]);
      } else {
        lCount++;
      }
    }
    if (key[0] === "r") {
      if (props.filters[key][0]) {
        activeRar.push(props.filters[key][1]);
      } else {
        rCount++;
      }
    }
  }
  //
  // Filtering data down based on filters that are selected
  let dataToShow = [];

  if (lCount === 12 && rCount === 6) {
    dataToShow = props.plantData;
  } else if (lCount < 12 && rCount === 6) {
    dataToShow = props.plantData.filter(el => {
      return activeLoc.every(r => el.location.indexOf(r) !== -1);
    });
  } else if (lCount === 12 && rCount < 6) {
    dataToShow = props.plantData.filter(el => {
      return activeRar.indexOf(el.rarity) !== -1;
    });
  } else {
    dataToShow = props.plantData.filter(el => {
      return (
        activeLoc.every(r => el.location.indexOf(r) !== -1) &&
        activeRar.indexOf(el.rarity) !== -1
      );
    });
  }
  //
  // creating elements
  const plantEle = [];

  for (let plant in dataToShow) {
    const info = dataToShow[plant];
    const location = [];

    info.location.forEach(el => {
      location.push(
        <p className="plant-title-sub" key={el}>
          {el}
        </p>
      );
    });
    plantEle.push(
      <section className="plant" key={info.name}>
        <h2 className="plant-name">{info.name}</h2>
        <h3 className="plant-title">Rarity</h3>
        <p className="plant-title-sub">{info.rarity}</p>
        <h3 className="plant-title plant-title--loc">Locations</h3>
        <div className="plant-loc">{location}</div>
        <div className="plant-des">
          <ReactMarkdown source={info.description} />
        </div>
      </section>
    );
  }
  //
  return <div className="container-plant">{plantEle}</div>;
};

export default PlantsBody;
