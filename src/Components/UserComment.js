import { fetchUserByUserName } from "../api";
import { useEffect, useState } from "react";

const UserComment = ({ comment }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUserByUserName(comment.author).then((data) => {setUser(data)
    setIsLoading(false)});
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  console.log(comment)
  return (
    <>
      <div className="user-comment">
        <img src={user.avatar_url} alt={`${user.username}`} />
        <h4>Posted by {user.username} on {comment.created_at.replace(/T/g, " ").replace(/:00.000Z/g, "")}</h4>
      </div>
      <div className="comment-body-and-votes">
      <p>{comment.body}</p>
      <h5> 👍🏻 {comment.votes}</h5>
      </div>
    </>
  );
};

export default UserComment;
