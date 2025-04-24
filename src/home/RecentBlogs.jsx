import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";


const RecentBlogs = () => {
    

    const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    // Fetch recent blogs from the backend
    fetch("https://blog-website-server-blush.vercel.app/recentBlogs")
    // fetch("http://localhost:5000/recentBlogs")
      .then((res) => res.json())
      .then((data) => {
        setRecentBlogs(data);
      })
      
  }, []);


  
    return (
        <div >
            <h2 className="text-center w-full mt-20 text-3xl text-[#A294F9] font-bold mb-10">Recent Blog Posts</h2>
            <div className="my-5  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-14 gap-y-10">

                {
                   recentBlogs.map(recentBlog => <RecentBlogCard key={recentBlog._id} recentBlog={recentBlog}></RecentBlogCard>) 
                }
            </div>
           
  
        </div>
    );
};

export default RecentBlogs;