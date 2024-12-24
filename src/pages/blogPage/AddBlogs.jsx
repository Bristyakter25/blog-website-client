import Swal from "sweetalert2";


const AddBlogs = () => {
   
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
   

    // send data to the server
    fetch("http://localhost:5000/addBlogs",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(blogData)

    })
    .then(res=> res.json())
    .then(data =>{
        if (data.insertedId){
          Swal.fire({
            title: "Success!",
            text: "Your review has been submitted successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          
        }

    })
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
              placeholder="Enter the game title"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Blog Image</label>
            <input
              type="url"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter the URL of the game cover"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium">Long Description</label>
            <textarea
              name="longDescription"
              className="textarea textarea-bordered w-full"
              placeholder="Write your review here..."
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
  