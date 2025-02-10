import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const RecentBlogCard = ({recentBlog}) => {
  const handleAddToWishlist = (blogId) => {
    fetch("https://blog-website-server-blush.vercel.app/wishList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blogId }), // Only send blogId
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Wish Listed!",
            icon: "success",
            draggable: true
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Blog already added to the wish list!!",
            text: "Something went wrong!",
           
          });;
        }
      })
      .catch((error) => console.error("Error adding to wishlist:", error));
  };
    const {title,longDescription,photo,_id} = recentBlog;
    return (
        <div className="card card-compact bg-base-100 w-[300px]  shadow-xl">
  <figure>
    <img className="w-full h-[200px]"
      src={photo}
      alt="blogs" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p>{longDescription}</p>
    <div className="card-actions justify-end">
      <Link to={`/recentBlogs/${recentBlog._id}`}><button className="btn glass bg-[#6C48C5] hover:text-purple-700 text-white">Details</button></Link>
      <button
            onClick={() => handleAddToWishlist(_id)} // Pass blogId
            className="btn hover:text-purple-700 glass bg-[#A294F9] text-white rounded"
          >
            Add to Wishlist
          </button>

    </div>
  </div>
</div>
    );
};

export default RecentBlogCard;