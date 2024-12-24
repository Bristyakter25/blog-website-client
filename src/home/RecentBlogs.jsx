import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";


const RecentBlogs = () => {
    // const [blogs,setBlogs] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/blogs')
    //     .then(res=> res.json())
    //     .then(data =>
    //         {
    //             setBlogs(data);
    //         })

    // },[])

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

            {/* <h2 className="text-center text-3xl font-bold">Recent Blog Posts</h2>
            <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">

                {
                   recentBlogs.map(blog => <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>) 
                }
            </div> */}





            {/* <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Recent Blogs</h1>
      {recentBlogs.length > 0 ? (
        <div className="space-y-4">
          {recentBlogs.map((blog) => (
            <div key={blog._id} className="p-4 bg-white shadow rounded">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <img
                src={blog.photo}
                alt={blog.title}
                className="w-full h-48 object-cover rounded my-2"
              />
              <p className="text-gray-700"></p>
              <span className="text-sm text-gray-500">
                Published: {blog.publishingYear}
              </span>
              <p className="text-sm text-blue-500">{blog.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No recent blogs available.</p>
      )}
    </div> */}
        </div>
    );
};

export default RecentBlogs;