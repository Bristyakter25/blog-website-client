import { useState, useEffect } from "react";

import AllBlogsCard from "./AllBlogsCard";

const BlogsPage = () => {
  const [allBlogs, setAllBlogs] = useState([]); 
  const [filteredBlogs, setFilteredBlogs] = useState([]); 
  const [loading, setLoading] = useState(true); // Loading state to control the spinner

  useEffect(() => {
    fetch("https://blog-website-server-blush.vercel.app/addBlogs")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setFilteredBlogs(data);
        setLoading(false); // Set loading to false when the data is loaded
      })
  }, []);

  return (
    <div className="w-full mx-auto my-48">
      <h1 className="text-3xl font-bold mb-5 text-center text-[#A294F9]">All Blogs</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-infinity text-purple-500  w-36"></span>
        </div>
      ) : (
        <div>
          {/* Render your blogs once loading is complete */}
          {filteredBlogs.length > 0 ? (
            <div className="space-y-6">
              {filteredBlogs.map((allBlog) => (
               <AllBlogsCard key={allBlog._id} allBlog={allBlog}></AllBlogsCard>
              ))}
            </div>
          ) : (
            <p>No blogs available for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
