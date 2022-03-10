import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api";
import UserComment from "./UserComment";
import PostComment from "./PostComment";

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
    <>
    <div className="comment-divider">
        <h4>Comments: {comments.length}</h4>
        </div>
        <div className="comments-list">
      <ul>
        {comments.map((comment) => {
          return (<li className="comment-list-container" key={comment.comment_id}>
            <UserComment comment={comment} />
          </li>);
        })}
      </ul>
      </div>
      <PostComment setComments={setComments}/>
      </>
  );
};

export default Comments;
