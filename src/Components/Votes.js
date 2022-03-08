import { useState, useEffect } from "react";
import { patchVotes } from "../api";
import Article from "./Article";

const Votes = ({ article }) => {
  const [voteCount, setVoteCount] = useState(article.votes);
  const [votesState, setVotesState] = useState(0);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);
  const [classActive, setClassActive] = useState(false);
  const [classDisActive, setClassDisActive] = useState(false);

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
