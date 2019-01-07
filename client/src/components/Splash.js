import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="container-splash">
      <h1 className="h-splash-title">Brodericks Compendium</h1>
      <h2 className="h-splash-sub">Plants and Fungi Across the Realm 2.0</h2>
      <Link to="/browse">Enter</Link>
    </div>
  );
};

export default Splash;
