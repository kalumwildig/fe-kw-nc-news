import { useState } from "react";
import { fetchAllArticles, fetchAllArticlesByTopic } from "../api";
import { useParams } from "react-router-dom";

const SortBy = ({ setNewsItems, setIsLoading }) => {
  const [sort, setSort] = useState();
  const { topic } = useParams();

  const handleSort = (option) => {
    setSort(option);
    setIsLoading(true)
    const sortArr = option.split("-");
    if (!topic) {
      fetchAllArticles({ sortBy: sortArr[0], order: sortArr[1] }).then(
        (data) => {
           setNewsItems(data);
           setIsLoading(false)
        }
      );
    }
    if (topic) {
        fetchAllArticlesByTopic(topic, { sortBy: sortArr[0], order: sortArr[1] }).then(
            (data) => {
             setNewsItems(data);
             setIsLoading(false)
            }
          );
    }
  };

  return (
    <div>
      <label htmlFor="sort">Sort:</label>
      <select
        onChange={(e) => handleSort(e.target.value)}
        value={sort}
        name="sort-articles"
        id="sort-articles"
      >
        <option value="Sort" hidden>
          Sort by:
        </option>
        <option value="author-asc">Author: A to Z</option>
        <option value="author-desc">Author: Z to A</option>
        <option value="title-asc">Article Title: A to Z</option>
        <option value="title-desc">Article Title: Z to A</option>
        <option value="topic-asc">Topic: A to Z</option>
        <option value="topic-asc">Topic: Z to A</option>
        <option value="created_at-asc">Date Created: Newest First</option>
        <option value="created_at-desc">Date Created: Oldest First</option>
        <option value="votes-desc">Most Votes</option>
        <option value="votes-asc">Fewest Votes</option>
        <option value="comment_count-desc">Most Comments</option>
        <option value="comment_count-asc">Least Comments</option>
      </select>
    </div>
  );
};

export default SortBy;
