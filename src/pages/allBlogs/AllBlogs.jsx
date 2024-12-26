import { useState, useEffect } from "react";
import AllBlogsCard from "./AllBlogsCard";

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
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">All Blogs</h1>

      {/* Category Table */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => filterByCategory("All")}
          className={`px-4 py-2 border rounded ${
            selectedCategory === "All" ? "bg-blue-500 text-white" : ""
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterByCategory(category)}
            className={`px-4 py-2 border rounded ${
              selectedCategory === category ? "bg-blue-500 text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

     
      <div>
        {filteredBlogs.length > 0 ? (
          <div className="space-y-4">
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
