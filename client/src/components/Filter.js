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

  // dropdown toggle
  function toggle(e) {
    document.querySelectorAll("." + e.target.id).forEach(el => {
      el.classList.toggle("filter--hide");
    });
  }

  //   Creating html elements for filters
  for (let key in filters) {
    if (key[0] === "l") {
      locList.push(
        <div
          className="filter-check filter--hide loc"
          key={key + " : " + filters[key]}
        >
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
        <div
          className="filter-check filter--hide rar"
          key={key + " : " + filters[key]}
        >
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
    <div className="filter">
      <section className="filter-category">
        <h4 id="loc" onClick={toggle} className="filter-title">
          Location
        </h4>
        <div className="filter-content">{locList}</div>
      </section>
      <section className="filter-category">
        <h4 id="rar" onClick={toggle} className="filter-title">
          Rarity
        </h4>
        <div className="filter-content">{rList}</div>
      </section>
    </div>
  );
};

export default Filter;
