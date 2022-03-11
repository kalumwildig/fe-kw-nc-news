import { fetchAllArticles, fetchAllArticlesByTopic } from "../api";
import { useParams } from "react-router-dom";

const SortBy = ({ setNewsItems, setIsLoading , sort , setSort}) => {
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
    <div className="sort-container">
      <select
        onChange={(e) => handleSort(e.target.value)}
        value={sort}
        name="sort-articles"
        id="sort-articles"
      >
        <option value="Sort" hidden>
          {sort ? sort : "Sort by:"}
        </option>
        <option value="created_at-desc">Newest First</option>
        <option value="created_at-asc">Oldest First</option>
        <option value="votes-desc">Most Votes</option>
        <option value="votes-asc">Fewest Votes</option>
        <option value="comment_count-desc">Most Comments</option>
        <option value="comment_count-asc">Fewest Comments</option>
      </select>
    </div>
  );
};

export default SortBy;
