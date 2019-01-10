import React from "react";
import ReactMarkdown from "react-markdown";

const PlantsBody = props => {
  // dropdown logic
  let prevTargets = {};
  function addClasses(targets) {
    targets.mainNext.classList.toggle("hide");
    targets.parMain.classList.toggle("active");
    targets.parMain.classList.toggle("active-main");
    if (targets.parPrev) {
      targets.parPrev.classList.toggle("active");
    }
    if (targets.parNext) {
      targets.parNext.classList.toggle("active");
    }
    prevTargets = targets;
  }
  function toggle(e) {
    // Save all elements that I will need
    const targets = {
      main: e.target,
      mainNext: e.target.nextSibling,
      parMain: e.target.parentElement,
      parPrev: e.target.parentElement.previousSibling,
      parNext: e.target.parentElement.nextSibling
    };
    // 1st click error prevention
    if (!prevTargets.hasOwnProperty("main")) {
      addClasses(targets);
      prevTargets = targets;
    } else {
      // clear previous css class names
      if (prevTargets.main.innerHTML !== targets.main.innerHTML) {
        document.querySelectorAll(".active").forEach(ele => {
          ele.classList.toggle("active");
        });
        document.querySelectorAll(".active-main").forEach(ele => {
          ele.classList.toggle("active-main");
          ele.lastChild.classList.toggle("hide");
        });
      }
      // set new css classes
      addClasses(targets);
      prevTargets = targets;
    }
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
    dataToShow = props.plants;
  } else if (lCount < 12 && rCount === 6) {
    dataToShow = props.plants.filter(el => {
      return activeLoc.every(r => el.location.indexOf(r) !== -1);
    });
  } else if (lCount === 12 && rCount < 6) {
    dataToShow = props.plants.filter(el => {
      return activeRar.indexOf(el.rarity) !== -1;
    });
  } else {
    dataToShow = props.plants.filter(el => {
      return (
        activeLoc.every(r => el.location.indexOf(r) !== -1) &&
        activeRar.indexOf(el.rarity) !== -1
      );
    });
  }
  //
  // Create element for a plant
  function createPlant(info) {
    const location = [];
    info.location.forEach(el => {
      location.push(<p key={el}>{el}</p>);
    });
    plantEle.push(
      <section key={info.name}>
        <h2 onClick={toggle}>{info.name}</h2>
        <div className="plant-container-sub hide">
          <h4>Rarity</h4>
          <h4>Locations</h4>
          <p>{info.rarity}</p>
          <div className="plant-container-loc">{location}</div>
          <ReactMarkdown className="plant-desc" source={info.description} />
        </div>
      </section>
    );
  }
  //
  const plantEle = [];
  for (let plant in dataToShow) {
    const info = dataToShow[plant];
    // if no filter selected show all
    if (props.filteredNames.length === 0) {
      createPlant(info);
    } else if (props.filteredNames.indexOf(info.name) >= 0) {
      createPlant(info);
    }
  }
  //

  return <div className="plant-container">{plantEle}</div>;
};

export default PlantsBody;
