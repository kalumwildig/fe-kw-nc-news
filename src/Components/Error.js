import { Link } from "react-router-dom";

const ErrorPage = ({isErr}) => {

    return (

        <div className="error-page">
          { isErr && isErr.status !==500? <h3>Error {isErr.status}: {isErr.data.msg}</h3> :<h3>Oops, this is not a valid request!</h3>}
            <Link to="/">Return to the home page</Link>
        </div>
    )
}

export default ErrorPage;