import React from "react";
import { Link } from "react-router-dom";

const Mode = props => {
  return (
    <div className="scavenge-container-mode">
      <h1>Please Select Your Mode</h1>
      <Link
        className="scavenge-link"
        to="/scavenge"
        onClick={props.modeClicked}
      >
        Advantage
      </Link>
      <Link
        className="scavenge-link"
        to="/scavenge"
        onClick={props.modeClicked}
      >
        Normal
      </Link>
      <Link
        className="scavenge-link"
        to="/scavenge"
        onClick={props.modeClicked}
      >
        Disadvantage
      </Link>
    </div>
  );
};

export default Mode;
