import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img
            className="img-logo"
            src="http://stur-exchange.co.uk/theme-content/uploads/2021/07/Box-office-logo.png"
            alt="logo"
          />
        </Link>
        <Link
          to="/favorites"
          className="favorites text-right"
          style={{ textDecoration: "none" }}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
