import React from "react";
import { Link } from "react-router-dom";

const Roll = props => {
  return (
    <div>
      <Link to="/scavenge" onClick={props.rollClicked}>
        Advantage
      </Link>
      <Link to="/scavenge" onClick={props.rollClicked}>
        Normal
      </Link>
      <Link to="/scavenge" onClick={props.rollClicked}>
        Disadvantage
      </Link>
    </div>
  );
};

export default Roll;
