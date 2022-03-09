import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api";
import UserComment from "./UserComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {article_id} = useParams()

  useEffect(() => {
    setIsLoading(true);
    fetchComments(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
      <ul>
        {comments.map((comment) => {
          return (<li className="comment-list-container" key={comment.comment_id}>
            <UserComment comment={comment} />
          </li>);
        })}
      </ul>
  );
};

export default Comments;
