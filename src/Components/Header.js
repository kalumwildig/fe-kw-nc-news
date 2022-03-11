import { Link  } from "react-router-dom";
import { useState, useContext} from "react";
import NaviLink from "./NavLink";
import { UserContext } from "./Context.js/UserContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {loggedInUser} = useContext(UserContext)

  const mobileMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" id="navbar__logo">
           <span> <h2>KW News</h2> </span>
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
          <ul onClick={mobileMenu} className={`navbar__menu ${isActive ? "active" : ""}`}>
           <NaviLink topic='Home' />
           <NaviLink topic='Coding' />
           <NaviLink topic='Football' />
           <NaviLink topic='Cooking' />
           <NaviLink topic={loggedInUser ? "User Profile" : 'Account'} />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
