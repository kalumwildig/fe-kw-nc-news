import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllArticlesByTopic } from "../api";
import AllNewsItems from "./AllNewsItems";
import SortBy from "./SortBy";

const Topics = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sort, setSort] = useState('');

    const {topic} = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetchAllArticlesByTopic(topic).then((data) => {
            setNewsItems(data)
            setIsLoading(false)})
        
    }, [topic])

    if (isLoading) {return <div className="overall-loading" ><h3>Loading </h3> <div className="loader"></div></div>;}

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