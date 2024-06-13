import React from "react";
import { Link } from "react-router-dom";

const logo = ({ toggleMenu }) => {
  return (
    <h1 className="header__logo">
      <Link to="/">
        <em aria-hidden="true" onClick={toggleMenu}>
          <span>
            LSJ
            <br />
            Youtube
          </span>
        </em>
      </Link>
    </h1>
  );
};

export default logo;
