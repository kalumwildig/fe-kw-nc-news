import { useState } from "react";
import { postComment } from "../api";

const PostComment = ({ article }) => {
  const [comment, setComment] = useState();

  const handleComment = () => {

    postComment(article.article_id, {username: "tickle122", body: comment})

  }


  return (
    <>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" onClick={handleComment}>Submit</button>
    </>
  );
};

export default PostComment;
