import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center text-center space-y-6 items-center min-h-screen">
                <h2 className="text-5xl font-bold text-red-500">404 Page Not Found</h2>
                <Link to={'/'}>
                <button className="px-8 py-3 rounded-lg text-xl font-bold text-white bg-red-400 ">Home</button>
                <img src="/404 error.jpg" className="my-5 rounded-lg md:w-150" alt="" />
                </Link>
        </div>
    );
};

export default ErrorPage;