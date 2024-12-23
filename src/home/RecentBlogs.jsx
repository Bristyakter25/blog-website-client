import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";


const RecentBlogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=> res.json())
        .then(data =>
            {
                setBlogs(data);
            })

    },[])
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {
                   blogs.map(blog => <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>) 
                }
            </div>
        </div>
    );
};

export default RecentBlogs;