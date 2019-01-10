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
    loce: "Oceans",
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

  // dropdown toggle
  function toggle(e) {
    document.querySelectorAll(".filter--" + e.target.id).forEach(el => {
      el.classList.toggle("hide");
    });
  }

  //   Creating html elements for filters
  for (let key in filters) {
    if (key[0] === "l") {
      locList.push(
        <div
          className="filter-container-check"
          key={key + " : " + filters[key]}
        >
          <input
            className="filter-checkbox"
            onClick={props.filterClick}
            type="checkbox"
            id={key}
            name={key}
          />
          <label className="filter-checkbox-label" htmlFor={key}>
            {filters[key]}
          </label>
        </div>
      );
    } else {
      rList.push(
        <div
          className="filter-container-check"
          key={key + " : " + filters[key]}
        >
          <input
            className="filter-checkbox"
            onClick={props.filterClick}
            type="checkbox"
            id={key}
            name={key}
          />
          <label className="filter-checkbox-label" htmlFor={key}>
            {filters[key]}
          </label>
        </div>
      );
    }
  }
  //
  // create options for dropdown element
  const options = [];
  props.plantNames.forEach(plant => {
    options.push(<option key={"op: " + plant} value={plant} />);
  });
  //
  return (
    <div className="filter-container">
      <datalist id="op">{options}</datalist>
      <input className="filter-search-box" type="text" list="op" />
      <button className="filter-search-btn" onClick={props.searchClick}>
        Search
      </button>
      <h4 id="loc" onClick={toggle}>
        Location
      </h4>
      <div className="hide filter--loc">{locList}</div>
      <h4 id="rar" onClick={toggle}>
        Rarity
      </h4>
      <div className="hide filter--rar">{rList}</div>
    </div>
  );
};

export default Filter;
