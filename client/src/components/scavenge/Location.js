import React from "react";
import { Link } from "react-router-dom";

const Location = props => {
  // Create Location Buttons
  const locations = [];
  props.locations.forEach(loc => {
    locations.push(
      <Link
        className="scavenge-link"
        to="/scavenge"
        onClick={props.locClicked}
        key={"op-loc: " + loc}
      >
        {loc}
      </Link>
    );
  });
  return <div className="scavenge-container-loc">{locations}</div>;
};

export default Location;
