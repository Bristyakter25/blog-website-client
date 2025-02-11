
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const AvailableBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch("https://blog-website-server-blush.vercel.app/addBlogs")
          .then((res) => res.json())
          .then((data) => {
            setAllBlogs(data);
            
          })
          
      }, []);
  return (
    <div className="mt-24 ">
     
      <h2 className="text-3xl font-bold text-[#A294F9] text-center mb-5">Available Blogs </h2>
      <Marquee pauseOnHover={true} className="space-x-10">
        {allBlogs.map((blog) => (
          <div key={blog._id} className="w-72 p-4">
           <div>
           <Link to='/allBlogs'>
             <img
              src={blog.photo}
              alt={blog.title}
              className="w-full h-32 object-cover rounded-lg shadow-md"
            /></Link>
           </div>
          </div>
        ))}
      </Marquee>
      
    </div>
  );
};

export default AvailableBlogs;
