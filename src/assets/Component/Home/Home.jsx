import { Helmet } from "react-helmet";
import Hero from "../../Section/Hero";
import Lawyers from "../Lawyers/Lawyers";
import CountUp from "react-countup";
import { FaUserSecret } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>LawyersSpot | Home</title>
            </Helmet>
            <Hero></Hero>
            <Lawyers></Lawyers>
            
            <div className="my-16 md:w-[75%] mx-auto">
                <div className="text-center space-y-4">
                    <h2 className="text-[40px] font-bold">We Provide Best Law Services</h2>
                    <p className="opacity-85 md:w-3/4 mx-auto ">From personal matters to complex business issues, we offer trusted representation and clear legal advice every step of the way.</p>
                </div>
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7 text-start">

                    <div className="p-8 bg-gray-200 rounded-xl border border-gray-200  space-y-4">
                        <FaUserSecret size={45}></FaUserSecret>
                        <h2 className="text-5xl font-bold">
                            <CountUp 
                            end={199}
                            duration={15}
                            ></CountUp>
                            +
                        </h2>
                        <h4 className="text-xl text-neutral-500 font-medium">Total Lawyer</h4>
                    </div>

                    <div className="p-8 bg-gray-200 rounded-xl border border-gray-200  space-y-4">
                        <TbStarsFilled size={45}></TbStarsFilled>
                        <h2 className="text-5xl font-bold">
                            <CountUp 
                            end={467}
                            duration={15}
                            ></CountUp>
                            +
                        </h2>
                        <h4 className="text-xl text-neutral-500 font-medium">Total Reviews</h4>
                    </div>

                    <div className="p-8 bg-gray-200 rounded-xl border border-gray-200  space-y-4">
                        <GoLaw size={45}></GoLaw>
                        <h2 className="text-5xl font-bold">
                            <CountUp 
                            end={1990}
                            duration={15}
                            ></CountUp>
                            +
                        </h2>
                        <h4 className="text-xl text-neutral-500 font-medium">Total Lawyer</h4>
                    </div>

                    <div className="p-8 bg-gray-200 rounded-xl border border-gray-200  space-y-4">
                        <FaUsers size={45}></FaUsers>
                        <h2 className="text-5xl font-bold">
                            <CountUp 
                            end={300}
                            duration={15}
                            ></CountUp>
                            +
                        </h2>
                        <h4 className="text-xl text-neutral-500 font-medium">Total Lawyer</h4>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Home;