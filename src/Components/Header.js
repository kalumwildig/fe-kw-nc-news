import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NaviLink from "./NavLink";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const mobileMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" id="navbar__logo">
            KW News
          </Link>
          <div
            onClick={mobileMenu}
            className={`navbar__toggle ${isActive ? "is-active" : ""}`}
            id="mobile-menu"
          >
            <span className="bar"> </span>
            <span className="bar"> </span>
            <span className="bar"> </span>
          </div>
          <ul className={`navbar__menu ${isActive ? "active" : ""}`}>
           <NaviLink topic='Home' />
           <NaviLink topic='Coding' />
           <NaviLink topic='Football' />
           <NaviLink topic='Cooking' />
           <NaviLink topic='Account' />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
