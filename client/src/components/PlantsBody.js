import React from "react";
import ReactMarkdown from "react-markdown";

const PlantsBody = props => {
  // dropdown toggle
  function toggle(e) {
    const target = e.target.nextSibling;
    console.log(target.classList);
    target.classList.toggle("hide");
  }
  //
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
      location.push(<p key={el}>{el}</p>);
    });
    plantEle.push(
      <section key={info.name}>
        <h2 id={info.name} className="plant-name" onClick={toggle}>
          {info.name}
        </h2>
        <div className="container-plants hide">
          <h4>Rarity</h4>
          <p>{info.rarity}</p>
          <h4 className="plant-title-loc">Locations</h4>
          <div className="container-loc">{location}</div>
          <ReactMarkdown className="plant-desc" source={info.description} />
        </div>
      </section>
    );
  }
  //

  return <div>{plantEle}</div>;
};

export default PlantsBody;
