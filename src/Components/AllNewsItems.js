const AllNewsItems = ({newsItems}) => {


    return (
        newsItems.map((item) => {
            return (
                <li key={item.article_id}>
                    <h3>{item.title}</h3>
                    <h6>{item.topic}</h6>
                    <h5>Added: {item.created_at.replace(/T/g, " ").replace(/\:00\.000Z/g, "")}</h5>

                </li>
            )

        })
    )
}



export default AllNewsItems