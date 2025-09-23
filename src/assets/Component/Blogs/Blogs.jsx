import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigation } from "react-router-dom";
import Loader from "../../ErrorPages/Loader";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const navigation = useNavigation()
    useEffect(()=>{
        fetch("/lawyerblog.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs);
    if(navigation.state === 'loading'){
        return <Loader></Loader>
    }
    return (
        <div className="mx-auto md:w-[75%]">
            <Helmet>
                <title>Blogs | LawyerSpot</title>
            </Helmet>

                <section className="text-center my-12 space-y-6">
                    <h2 className="font-bold text-4xl">Blogs</h2>
                    <p className="opacity-85 font-medium text-lg">Clear, concise answers to your healthcare and appointment questions.</p>
                </section>

               <div className="space-y-7">
                {
                    blogs.map(blog=> <Blog 
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
               </div>
        </div>
    );
};

export default Blogs;