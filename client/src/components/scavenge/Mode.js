import React from "react";
import { Link } from "react-router-dom";

const Mode = props => {
  return (
    <div>
      <Link to="/scavenge" onClick={props.modeClicked}>
        Advantage
      </Link>
      <Link to="/scavenge" onClick={props.modeClicked}>
        Normal
      </Link>
      <Link to="/scavenge" onClick={props.modeClicked}>
        Disadvantage
      </Link>
    </div>
  );
};

export default Mode;
