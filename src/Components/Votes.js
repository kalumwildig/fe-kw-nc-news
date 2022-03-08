import { useState, useEffect } from "react";
import { patchVotes } from "../api";
import Article from "./Article";

const Votes = ({ article }) => {
  const [voteCount, setVoteCount] = useState(article.votes);
  const [votesState, setVotesState] = useState(0);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  const adjustVotesLike = () => {
    if (!isLikeActive && votesState === 0) {
      setVoteCount((current) => current + 1);
      patchVotes(article.article_id, 1)
    }
    if (!isLikeActive && votesState === -1) {
      setVoteCount((current) => current + 2);
      setIsDislikeActive(!isDislikeActive);
      patchVotes(article.article_id, 1)
    }
    if (isLikeActive && votesState === 1) {
      setVoteCount((current) => current - 1);
      patchVotes(article.article_id, 1)
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
      patchVotes(article.article_id,  -1)
    }
    if (!isDislikeActive && votesState === 1) {
      setVoteCount((current) => current - 2);
      setIsLikeActive(!isLikeActive);
      patchVotes(article.article_id,  -2)
    }
    if (isDislikeActive && votesState === -1) {
      setVoteCount((current) => current + 1);
      patchVotes(article.article_id, 1)
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
      <button
        onClick={() => {
          adjustVotesLike();
        }}
      >
        👍🏻
      </button>
      <h4>{voteCount}</h4>
      <button
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
