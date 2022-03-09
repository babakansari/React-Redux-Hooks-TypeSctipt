import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <Link to="/" style={activeStyle}>
        Home
      </Link>
      {" | "}
      <Link to="rostering" style={activeStyle}>
        Rosters
      </Link>
      {" | "}
      <Link to="about" style={activeStyle}>
        About
      </Link>
    </nav>
  );
};

export default Header;
