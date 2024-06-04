import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-center text-5xl mt-10 text-pink-500">Not found page</h2>

            <Link ><button className="btn btn-warning ms-16"> Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;