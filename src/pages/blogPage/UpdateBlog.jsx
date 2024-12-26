import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const updateBlog = useLoaderData();
  const { _id, title, photo, longDescription, publishingYear, category } = updateBlog || {}; // Handle nullish data
  const genres = ["Web Development", "Design", "CSS", "Backend Development", "Security"];
  
  const handleUpdateBlog = (e) => {
    e.preventDefault();

    const form = e.target;
    const blogData = {
      title: form.title.value,
      photo: form.photo.value,
      longDescription: form.longDescription.value,
      publishingYear: form.publishingYear.value,
      category: form.category.value,
    };

    console.log(blogData);

    fetch(`http://localhost:5000/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your blog has been updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update the blog!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred!",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Update Blog</h1>
      <form onSubmit={handleUpdateBlog} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block font-medium">Blog Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Enter the blog title"
            defaultValue={title || ""}
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
            defaultValue={photo || ""}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Long Description</label>
          <textarea
            name="longDescription"
            className="textarea textarea-bordered w-full"
            placeholder="Write your description here..."
            defaultValue={longDescription || ""}
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
            defaultValue={publishingYear || ""}
            min="1995"
            max={new Date().getFullYear()}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
            defaultValue={category || ""}
          >
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
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
