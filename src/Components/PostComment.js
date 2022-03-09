import { useState } from "react";
import { postComment } from "../api";
import { useContext } from "react";
import { UserContext } from "./Context.js/UserContext";
import { useParams } from "react-router-dom";

const PostComment = ({ setComments }) => {
  const [comment, setComment] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const { article_id } = useParams();
  const [successful, setSuccessful] = useState(false)

  const handleComment = () => {
    postComment(article_id, {
      username: loggedInUser.username,
      body: comment,
    }).then((data) => {
      setComments((current) => {
        return [...current, data ];
      });
      setComment('')
      setSuccessful(true)
      setTimeout(() => {setSuccessful(false)}, 3000)
    });
  };

  return loggedInUser ? (
    <>
    <div className="post-comment">
     <input
        type="text"
        id="comment"
        value={comment}
        placeholder="Enter a comment..."
        onChange={(e) =>{  
        setComment(e.target.value)
        setSuccessful(false)}}
      />
      <button type="submit" onClick={handleComment}
      disabled={comment.length === 0 || null ? true : false}>
        Add Comment
      </button>
      {successful ? <div className="success-container"><h4>Success: Comment successfully added</h4></div>: ""}
      </div>
      
    </>
  ) : (
    ""
  );
};

export default PostComment;
