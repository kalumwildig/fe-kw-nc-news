import { useState, useEffect } from "react";
import { fetchAllArticles } from "../api";
import AllNewsItems from "./AllNewsItems";


const Home = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [sortBy, setSortBy] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchAllArticles().then((data) => {setNewsItems(data)
            setIsLoading(false)
        }) 
    }, [])

    if (isLoading) {return <div className="overall-loading" >Loading <div class="loader"></div></div>;}


    return (
        <div className="all-news-body">
            <ul className="all-list-items">
            <AllNewsItems newsItems={newsItems}/>
            </ul>
        </div>
    )

}

export default Home;