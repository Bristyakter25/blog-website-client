import { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext";


const AddBlogs = () => {
  const {user} =useContext(AuthContext);
   
    const handleSubmitBlog = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const blogData = {
  
       title : form.title.value,
       photo : form.photo.value,
       longDescription : form.longDescription.value,
       publishingYear : form.publishingYear.value,
       category : form.category.value,
      
      };
      console.log(blogData);
   

    

    fetch('https://blog-website-server-blush.vercel.app/addBlogs', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'user-email': user.email, 
      },
      body: JSON.stringify(blogData),
  })
      .then(res => res.json())
      .then(data => {
          if (data.insertedId) {
              alert("Blog added successfully!");
          }
      });
  
    };
    const genres = ["Web Development", "Design", "CSS", "Backend Development", "Security"];
  
    return (
      <div className="max-w-lg mx-auto my-10">
        <h1 className="text-3xl font-bold mb-5">Add New Blog</h1>
        <form onSubmit={handleSubmitBlog} className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block font-medium">Blog Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="Enter the blog title"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Blog Image</label>
            <input
              type="url"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter the URL of the blog cover"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Long Description</label>
            <textarea
              name="longDescription"
              className="textarea textarea-bordered w-full"
              placeholder="Write your description here..."
              required
            ></textarea>
          </div>
  
          <div>
            <label className="block font-medium">Publishing Year</label>
            <input
              type="number"
              name="publishingYear"
              className="input input-bordered w-full"
              placeholder="Enter the publishing year"
              min="1995"
              max={new Date().getFullYear()}
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Category</label>
            <select name="category" className="select select-bordered w-full" required defaultValue="">
              <option value="" disabled>
                Select a genre
              </option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
  
          
  
          <div>
            <button type="submit" className="btn btn-primary w-full">
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddBlogs;
  