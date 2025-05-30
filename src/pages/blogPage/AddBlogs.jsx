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
            Swal.fire({
              title: "Success!",
              text: "Your review has been submitted successfully!",
              icon: "success",
              confirmButtonText: "OK",
            });;
          }
      });
  
    };
    const genres = ["Web Development", "Design", "CSS", "Backend Development", "Security"];
  
    return (
      <div className="lg:max-w-lg mx-auto mt-48">
        <h1 className="text-3xl font-bold  text-center mb-10">Add New Blog</h1>
        <form onSubmit={handleSubmitBlog} className="space-y-4 bg-white dark:bg-purple-700 p-6 rounded shadow">
          <div>
            <label className="block font-medium">Blog Title</label>
            <input
              type="text"
              name="title"
              className="input dark:text-black bg-white input-bordered w-full"
              placeholder="Enter the blog title"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Blog Image</label>
            <input
              type="url"
              name="photo"
              className="input dark:text-black bg-white   input-bordered w-full"
              placeholder="Enter the URL of the blog cover"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Long Description</label>
            <textarea
              name="longDescription"
              className="textarea dark:text-black bg-white  textarea-bordered w-full"
              placeholder="Write your description here..."
              required
            ></textarea>
          </div>
  
          <div>
            <label className="block font-medium">Publishing Year</label>
            <input
              type="number"
              name="publishingYear"
              className="input dark:text-black bg-white   input-bordered w-full"
              placeholder="Enter the publishing year"
              min="1995"
              max={new Date().getFullYear()}
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Category</label>
            <select name="category" className="select bg-white dark:text-black select-bordered w-full" required defaultValue="">
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
            <button type="submit" className="btn bg-[#7E60BF] hover:bg-purple-300 hover:text-black text-white w-full">
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddBlogs;
  