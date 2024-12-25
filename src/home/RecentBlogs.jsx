import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";


const RecentBlogs = () => {
    

    const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    // Fetch recent blogs from the backend
    fetch("http://localhost:5000/recentBlogs")
      .then((res) => res.json())
      .then((data) => {
        setRecentBlogs(data);
      })
      
  }, []);


  
    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Recent Blog Posts</h2>
            <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">

                {
                   recentBlogs.map(recentBlog => <RecentBlogCard key={recentBlog._id} recentBlog={recentBlog}></RecentBlogCard>) 
                }
            </div>
  
        </div>
    );
};

export default RecentBlogs;