import { useState, useEffect } from "react";
import { fetchAllArticles } from "../api";
import AllNewsItems from "./AllNewsItems";


const Home = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [sortBy, setSortBy] = useState()
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        setIsLoading(true)
        fetchAllArticles().then((data) => setNewsItems(data))
        setIsLoading(false)
    })


    if (isLoading) {return <h3>.....loading</h3>}


    return (
        <div>
            <ul>
            <AllNewsItems newsItems={newsItems}/>
            </ul>
        </div>
    )

}

export default Home;