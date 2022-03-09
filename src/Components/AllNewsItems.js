import { Link } from "react-router-dom";

const AllNewsItems = ({ newsItems }) => {
  return newsItems.map((item) => {
    return (
      <li className="all-news-list">
        <Link
          key={item.article_id}
          className="card-link"
          to={`/topics/${item.topic}/article/${item.article_id}`}
        >
          {" "}
          <h3>{item.title}</h3>
        </Link>
        <div className="news-card-lower">
          <h5>
            Posted by {item.author} on{" "}
            {item.created_at.replace(/T/g, " ").replace(/:00.000Z/g, "")}
          </h5>
          <Link to={`/topics/${item.topic}/articles`}>
            {" "}
            <h6>#{item.topic}</h6>
          </Link>
        </div>
      </li>
    );
  });
};

export default AllNewsItems;
