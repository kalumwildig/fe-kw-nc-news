import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../api";
import Votes from "./Votes";
import Comments from "./Comments"

const Article = () => {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h3>.....loading</h3>;
  }

  return (
    <>
      <div className="article-card" key={article.article_id}>
        <h2>{article.title}</h2>
        <h4>Posted by {article.author}</h4>
        <p>{article.body}</p>
      </div>
      <div className="vote-divider">
        <Votes article={article} />
      </div>
      <div className="comment-divider">
        <h4>Comments: {article.comment_count}</h4>
      </div>
      <div className="comments-list">
        <Comments article={article} />
      </div>
    </>
  );
};

export default Article;
