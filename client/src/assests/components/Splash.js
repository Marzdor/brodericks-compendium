import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="splash-container">
      <h1 className="splash-title">Brodericks Compendium</h1>
      <h2 className="splash-title-sub">
        Plants and Fungi Across the Realm 2.0
      </h2>
      <Link className="splash-link" to="/browse">
        Browse
      </Link>
      <Link className="splash-link" to="/scavenge">
        Scavenge
      </Link>
    </div>
  );
};

export default Splash;
