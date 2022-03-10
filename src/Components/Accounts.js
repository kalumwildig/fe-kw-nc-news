import { fetchUserByUserName } from "../api";
import { useState } from "react";

const Accounts = ({ loggedInUser, setLoggedInUser }) => {
  const [user, setUser] = useState('');
  const [err, setErr] = useState(null);

  const handleUserRequest = () => {
    fetchUserByUserName(user)
      .then((data) => {
        setLoggedInUser(data);
      })
      .catch((res) => {
        setErr(res);
        setUser("");
      });
  };

  return loggedInUser ? (
    <>
    <div className="account-log">
    <img src={loggedInUser.avatar_url} alt={`${loggedInUser.username}`} />
      <h3>{loggedInUser.name}</h3>
      <h4>Username: {loggedInUser.username}</h4>
     <button
        className="log-out"
        onClick={() => {
          setLoggedInUser();
          setUser("");
        }}
      >
        Log out
      </button>
      </div>
    </>
  ) : (
    <>
      <div className="log-in-input">
        {" "}
        <input
          type="text"
          id="user-login"
          value={user}
          placeholder="Enter Your Username.."
          onChange={(e) => {setUser(e.target.value); setErr('')}}
        />
        <button type="submit" onClick={handleUserRequest}>
          Log-in
        </button>
        (
        {err ? (
          <div className="err-on-login">
            We could not find this user, please try again
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Accounts;
