import { useContext, useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import { fetchComments } from "../api";
import UserComment from "./UserComment";
import PostComment from "./PostComment";
import { UserContext } from "./Context.js/UserContext";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {loggedInUser} = useContext(UserContext)
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchComments(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (
      <div className="overall-loading">
        <h3>Loading </h3> <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="comment-divider">
        <h4>Comments: {comments.length}</h4>
      </div>
      <div className="comments-list">
       {!loggedInUser ? <div className="log-in-prompt">
          {" "}
          <h4>
            You must be logged in to add comments, votes and delete any existing
            comments you have posted. <Link className='log-in-prompt-link' to="/accounts" > Log in here </Link>
          </h4>
        </div>: null }
        <ul>
          {comments.map((comment) => {
            return (
              <li className="comment-list-container" key={comment.comment_id}>
                <UserComment
                  comment={comment}
                  setComments={setComments}
                  setIsDelete={setIsDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <PostComment setComments={setComments} />
      {isDelete ? (
        <div className="delete-container">
          <h4> Comment successfully deleted </h4>
        </div>
      ) : null}
    </>
  );
};

export default Comments;
