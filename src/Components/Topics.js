import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllArticlesByTopic } from "../api";
import AllNewsItems from "./AllNewsItems";

const Topics = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [sortBy, setSortBy] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const {topic} = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetchAllArticlesByTopic(topic).then((data) => {
            setNewsItems(data)
            setIsLoading(false)})
        
    }, [topic])

    if (isLoading) {return <div className="overall-loading" >Loading <div class="loader"></div></div>;}

    return (
        <div className="all-news-body">
            <ul className="all-list-items">
            <AllNewsItems newsItems={newsItems}/>
            </ul>
        </div>
    )
}

export default Topics