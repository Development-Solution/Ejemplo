import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="container mt-3 w-75">
            <div className='jumbotron py-3 text-danger text-center alert alert-warning'>
                <h1>Oops!</h1>
                <p>Lo sentimos, ha ocurrido un error!</p>
            </div>
        </div>
    );
}

export default ErrorPage