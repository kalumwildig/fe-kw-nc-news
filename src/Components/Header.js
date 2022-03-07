import { Link } from "react-router-dom";

const Header = () => {
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");
    // console.log(menu.classList)

  const mobileMenu = () => {
    // console.log(menu.classList)
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
            <Link to="/" id="navbar__logo">
              KW News
            </Link>
          <div onClick={mobileMenu} className="navbar__toggle" id="mobile-menu">
            <span className="bar"> </span>
            <span className="bar"> </span>
            <span className="bar"> </span>
          </div>
          <ul className="navbar__menu">
            <li className="navbar__item">
              <Link className="navbar__links" to="/">
                <h4>Home</h4>
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__links" to="/home">
                <h4>Coding</h4>
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__links" to="/home">
                <h4>Football</h4>
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__links" to="/home">
                <h4>Cooking</h4>
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__links" to="/home">
                <h4>Accounts</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
