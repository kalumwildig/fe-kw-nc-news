import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to='/home'>
          <h1>KW News</h1>
        </Link>
      </header>
      <nav>
        <Link to='/home'>
          <h4>Home</h4>
        </Link>
        <Link to='/home'>
          <h4>Coding</h4>
        </Link>
        <Link to='/home'>
          <h4>Football</h4>
        </Link>
        <Link to='/home'>
          <h4>Cooking</h4>
        </Link>
        <Link to='/home'>
          <h4>Accounts</h4>
        </Link>
      </nav>
    </>
  );
};

export default Header;
