import { Link } from "react-router-dom";

const NaviLink = ({ topic }) => {
  return (
    <li className="navbar__item">
      <Link
        className="navbar__links"
        to={
          topic.toLowerCase() === "home"
            ? "/"
            : topic.toLowerCase() === "account" || "user profile"
            ? `/accounts`
            : `/topics/${topic.toLowerCase()}/articles`
        }
      >
        <h4>{topic}</h4>
      </Link>
    </li>
  );
};
export default NaviLink;
