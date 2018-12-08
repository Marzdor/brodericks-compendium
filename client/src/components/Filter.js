import React from "react";

const Filter = props => {
  const filters = {
    locations: {
      a: "Arctic",
      ci: "Cities",
      co: "Coastal",
      d: "Deserts",
      f: "Forests",
      j: "Jungles",
      m: "Mountains",
      o: "Oceans",
      p: "Plains",
      i: "Rivers",
      s: "Swamps",
      ud: "Underdark/Caves"
    },
    rarity: {
      vc: "Very Common",
      c: "Common",
      uc: "Uncommon",
      ra: "Rare",
      vr: "Very Rare",
      l: "Legendary"
    }
  };
  const locList = [];
  const rList = [];

  //   Creating html elements for filters
  for (let key in filters.locations) {
    locList.push(
      <div key={key + " : " + filters.locations[key]}>
        <input
          onClick={props.filterClick}
          type="checkbox"
          id={key}
          name={key}
        />
        <label htmlFor={key}>{filters.locations[key]}</label>
      </div>
    );
  }
  for (let key in filters.rarity) {
    rList.push(
      <div key={key + " : " + filters.rarity[key]}>
        <input
          onClick={props.filterClick}
          type="checkbox"
          id={key}
          name={key}
        />
        <label htmlFor={key}>{filters.rarity[key]}</label>
      </div>
    );
  }
  //

  return (
    <div>
      <h4>Rarity</h4>
      {locList}
      <h4>Location</h4>
      {rList}
    </div>
  );
};

export default Filter;
