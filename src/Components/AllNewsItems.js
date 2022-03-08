import { Link } from "react-router-dom"

const AllNewsItems = ({newsItems}) => {


    return (
        newsItems.map((item) => {
            return (
                <Link to={`/topics/${item.topic}/article/${item.article_id}`}>
                <li className="all-news-list" key={item.article_id}>
                    <h3>{item.title}</h3>
                    <h5>Posted by {item.author} on {item.created_at.replace(/T/g, " ").replace(/:00.000Z/g, "")}</h5>
                    <Link to={`/topics/${item.topic}/articles`}> <h6># {item.topic}</h6></Link>
                </li>
                </Link>
            )

        })
    )
}



export default AllNewsItems