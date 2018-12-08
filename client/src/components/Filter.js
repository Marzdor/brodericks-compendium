import React from "react";

const Filter = props => {
  const filters = {
    lar: "Arctic",
    lci: "Cities",
    lco: "Coastal",
    lde: "Deserts",
    lfo: "Forests",
    lju: "Jungles",
    lmo: "Mountains",
    loc: "Oceans",
    lpl: "Plains",
    lri: "Rivers",
    lsw: "Swamps",
    lud: "Underdark/Caves",
    rvc: "Very Common",
    rco: "Common",
    ruc: "Uncommon",
    rra: "Rare",
    rvr: "Very Rare",
    rle: "Legendary"
  };
  const locList = [];
  const rList = [];

  //   Creating html elements for filters
  for (let key in filters) {
    if (key[0] === "l") {
      locList.push(
        <div key={key + " : " + filters[key]}>
          <input
            onClick={props.filterClick}
            type="checkbox"
            id={key}
            name={key}
          />
          <label htmlFor={key}>{filters[key]}</label>
        </div>
      );
    } else {
      rList.push(
        <div key={key + " : " + filters[key]}>
          <input
            onClick={props.filterClick}
            type="checkbox"
            id={key}
            name={key}
          />
          <label htmlFor={key}>{filters[key]}</label>
        </div>
      );
    }
  }
  //

  return (
    <div>
      <h4>Location</h4>
      {locList}
      <h4>Rarity</h4>
      {rList}
    </div>
  );
};

export default Filter;
