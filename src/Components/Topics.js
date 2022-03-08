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

    if (isLoading) {return <h3>.....loading</h3>}

    return (
        <div className="all-news-body">
            <ul className="all-list-items">
            <AllNewsItems newsItems={newsItems}/>
            </ul>
        </div>
    )
}

export default Topics