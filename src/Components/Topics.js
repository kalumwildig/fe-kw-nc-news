import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllArticlesByTopic } from "../api";
import AllNewsItems from "./AllNewsItems";
import SortBy from "./SortBy";
import ErrorPage from "./Error";

const Topics = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsErr] = useState('')
    const [sort, setSort] = useState('');

    const {topic} = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetchAllArticlesByTopic(topic).then((data) => {
            setNewsItems(data)
            setIsLoading(false)}).catch((error) => {
                setIsErr(error.response); 
                setIsLoading(false);})
        
    }, [topic])

    if (isLoading) {return <div className="overall-loading" ><h3>Loading </h3> <div className="loader"></div></div>;}
    if (isErr) {return <ErrorPage isErr={isErr} />}

    return (
        <>
        <SortBy setNewsItems={setNewsItems} setIsLoading={setIsLoading} sort={sort} setSort={setSort}/>
        <div className="all-news-body">
            <ul className="all-list-items">
            <AllNewsItems newsItems={newsItems}/>
            </ul>
        </div>
        </>
    )
}

export default Topics