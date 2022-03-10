import { fetchUserByUserName } from "../api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context.js/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { deleteComments } from "../api";

const UserComment = ({ comment, setComments, setIsDelete }) => {
  const [user, setUser] = useState();
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    fetchUserByUserName(comment.author).then((data) => {
      setUser(data);
      setIsLoading(false);
    });
  }, [comment.author]);

  const deleteComment = () => {
    setIsDelete(false)
    deleteComments(comment.comment_id)
      .then((res) => {
        if (res.status === 204) {
          setIsDelete(true);
          setIsErr(false);
          setComments((current) =>
            [...current].filter(
              (curComment) => curComment.comment_id !== comment.comment_id
            )
          );
          setTimeout(() => {
            setIsDelete(false);
          }, 4000);
        }
      })
      .catch(() => setIsErr(true));
  };

  if (isLoading) {
    return <div className="overall-loading" ><h3>Loading </h3> <div class="loader"></div></div>;;
  }

  return (
    <>
      <div className="user-comment">
        <img src={user.avatar_url} alt={`${user.username}`} />
        <h4>
          Posted by {user.username} on{" "}
          {comment.created_at.replace(/T/g, " ").replace(/:00.000Z/g, "")}
        </h4>
        {loggedInUser?.username === user.username ? (
          <button
            onClick={() => {
              deleteComment();
            }}
          >
            <FontAwesomeIcon className="icon" icon={faCircleXmark} />
          </button>
        ) : null}
      </div>
      <div className="comment-body-and-votes">
        <p>{comment.body}</p>
        <h5> 👍🏻 {comment.votes}</h5>
        {isErr ? (
          <p className="delete-err">
            You are currently unable to delete this comment
          </p>
        ) : null}
      </div>
    </>
  );
};

export default UserComment;
