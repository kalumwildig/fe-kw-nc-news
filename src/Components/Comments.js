import { useEffect, useState } from "react";
import { fetchComments } from "../api";
import UserComment from "./UserComment";

const Comments = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(article.article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <ul>
        {comments.map((comment) => {
          return (<li className="comment-list-container" key={comment.comment_id}>
            <UserComment comment={comment} />
          </li>);
        })}
      </ul>
    </>
  );
};

export default Comments;
