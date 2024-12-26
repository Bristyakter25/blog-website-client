import { Link } from "react-router-dom";


const RecentBlogCard = ({recentBlog}) => {
  const handleAddToWishlist = (blogId) => {
    fetch("http://localhost:5000/wishList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blogId }), // Only send blogId
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Blog added to wishlist!");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error("Error adding to wishlist:", error));
  };
    const {title,longDescription,photo,_id} = recentBlog;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img className="w-full h-[230px]"
      src={photo}
      alt="blogs" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p>{longDescription}</p>
    <div className="card-actions justify-end">
      <Link to={`/recentBlogs/${recentBlog._id}`}><button className="btn glass bg-black text-white">Details</button></Link>
      <button
            onClick={() => handleAddToWishlist(_id)} // Pass blogId
            className="btn glass bg-cyan-800 text-white rounded"
          >
            Add to Wishlist
          </button>

    </div>
  </div>
</div>
    );
};

export default RecentBlogCard;