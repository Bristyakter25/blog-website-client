import { useState, useEffect } from "react";
import AllBlogsCard from "./AllBlogsCard";
import AvailableBlogs from "../../home/AvailableBlogs";

const BlogsPage = () => {
  const [allBlogs, setAllBlogs] = useState([]); // Stores all blogs
  const [filteredBlogs, setFilteredBlogs] = useState([]); // Stores blogs based on category filter
  const [categories] = useState([
    "Web Development",
    "Design",
    "CSS",
    "Backend Development",
    "Security",
  ]); 
  const [selectedCategory, setSelectedCategory] = useState(""); 

  
  useEffect(() => {
    fetch("https://blog-website-server-blush.vercel.app/addBlogs")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setFilteredBlogs(data); // Initially show all blogs
      })
      
  }, []);

  
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBlogs(allBlogs); 
    } else {
      const filtered = allBlogs.filter((blog) => blog.category === category);
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div className="w-full mx-auto my-48">
      <h1 className="text-3xl font-bold mb-5 text-center text-[#A294F9]">All Blogs</h1>

   
      <div className="w-full mx-auto mb-6 px-3">
  <div className="w-full max-w-screen-lg mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide">
    <div className="inline-flex justify-start gap-4 px-4 w-full snap-x snap-mandatory">
      <button
        onClick={() => filterByCategory("All")}
        className={`px-4 py-2 border rounded min-w-max hover:bg-purple-500 hover:text-white ${
          selectedCategory === "All" ? "bg-purple-500 text-white" : ""
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => filterByCategory(category)}
          className={`px-4 py-2 border rounded min-w-max hover:bg-purple-500 hover:text-white ${
            selectedCategory === category ? "bg-purple-500 text-white" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
</div>




     {/* <AvailableBlogs allBlogs={allBlogs}></AvailableBlogs> */}
     <AvailableBlogs allBlogs={allBlogs} />

     
      <div>
        {filteredBlogs.length > 0 ? (
          <div className="space-y-6 ">
            {filteredBlogs.map((allBlog) => (
              <AllBlogsCard key={allBlog._id} allBlog={allBlog}></AllBlogsCard>
             ))}
          </div>
        ) : (
          <p>No blogs available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;