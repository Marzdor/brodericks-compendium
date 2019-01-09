import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div>
      <h1>Brodericks Compendium</h1>
      <h2>Plants and Fungi Across the Realm 2.0</h2>
      <Link to="/browse">Browse</Link>
      <Link to="/scavenge">Scavenge</Link>
    </div>
  );
};

export default Splash;
