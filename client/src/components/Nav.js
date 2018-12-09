import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/plants&fungi">
        Plants & Fungi
      </Link>
      <Link className="nav-link" to="/scavenging">
        Scavenging
      </Link>
    </nav>
  );
};

export default Nav;
