import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../api";
import Votes from "./Votes";
import Comments from "./Comments"
import ErrorPage from "./Error";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState('')
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    }).catch((error) => {
      setIsErr(error.response); 
      setIsLoading(false);})
  }, [article_id]);

  if (isLoading) {
    return <div className="overall-loading" ><h3>Loading </h3> <div className="loader"></div></div>;
  }

  if (isErr) {return <ErrorPage isErr={isErr} />}

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
        <Comments />
    </>
  );
};

export default Article;

