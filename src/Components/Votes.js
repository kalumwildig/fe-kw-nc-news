import { useState} from "react";
import { patchVotes } from "../api";

const Votes = ({ article }) => {
  const [voteCount, setVoteCount] = useState(article.votes);
  const [votesState, setVotesState] = useState(0);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);
  const [classActive, setClassActive] = useState(false);
  const [classDisActive, setClassDisActive] = useState(false);



  ///code below handles patch and optimistic rendering for when a user hits the like button, conditional logic is applied as to what the current state is


  const adjustVotesLike = () => {
    if (!isLikeActive && votesState === 0) {
      setVoteCount((current) => current + 1);
      setClassActive(!classActive)
      patchVotes(article.article_id, 1).catch((err) => setVoteCount((current) => current - 1))
    }
    if (!isLikeActive && votesState === -1) {
      setVoteCount((current) => current + 2);
      setIsDislikeActive(!isDislikeActive);
      setClassActive(!classActive);
      setClassDisActive(!classDisActive)
      patchVotes(article.article_id, 2).catch((err) => setVoteCount((current) => current - 2))
    }
    if (isLikeActive && votesState === 1) {
      setVoteCount((current) => current - 1);
      setClassActive(!classActive)
      patchVotes(article.article_id, -1).catch((err) => setVoteCount((current) => current + 1))
    }

    setIsLikeActive(!isLikeActive);
    setVotesState((current) => {
      return current === 0
        ? current + 1
        : current === -1
        ? current + 2
        : current === 1
        ? current - 1
        : current;
    });
  };


   ///code below handles patch and optimistic rendering for when a user hits the dislike button, conditional logic is applied as to what the current state is
  
  const adjustVotesDislike = () => {
    if (!isDislikeActive && votesState === 0) {
      setVoteCount((current) => current - 1);
      setClassDisActive(!classDisActive)
      patchVotes(article.article_id,  -1).catch((err) => setVoteCount((current) => current + 1))
    }
    if (!isDislikeActive && votesState === 1) {
      setVoteCount((current) => current - 2);
      setIsLikeActive(!isLikeActive);
      setClassActive(!classActive);
      setClassDisActive(!classDisActive)
      patchVotes(article.article_id,  -2).catch((err) => setVoteCount((current) => current + 2))
    }
    if (isDislikeActive && votesState === -1) {
      setVoteCount((current) => current + 1);
      setClassDisActive(!classDisActive)
      patchVotes(article.article_id, 1).catch((err) => setVoteCount((current) => current - 1))
    }
    setIsDislikeActive(!isDislikeActive);
    setVotesState((current) => {
      return current === 0
        ? current - 1
        : current === 1
        ? current - 2
        : current === -1
        ? current + 1
        : current;
    });
  };



  return (
    <>
      <button className={`${classActive ? "active" : ""}`}
        onClick={() => {
          adjustVotesLike();
        }}
      >
        👍🏻
      </button>
      <h4>{voteCount}</h4>
      <button className={`${classDisActive ? "active" : ""}`}
        onClick={() => {
          adjustVotesDislike();
        }}
      >
        👎🏻
      </button>
    </>
  );
};

export default Votes;
