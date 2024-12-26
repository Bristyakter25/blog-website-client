import { Link } from "react-router-dom";


const AllBlogsCard = ({ allBlog }) => {
  

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
            alert("Blog added to wishlist!");
          } else {
            alert(data.message);
          }
        })
        .catch((error) => console.error("Error adding to wishlist:", error));
    };

  const { title, longDescription, photo, category,_id  } = allBlog;

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img className="w-full h-[350px]" src={photo} alt="blog" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-cyan-500 font-bold">{title}</h2>
        <p className="text-xl font-medium">{longDescription}</p>
        <p className="text-xl font-medium">Category: {category}</p>
        <div className="card-actions justify-end">
        <Link to={`/addBlogs/${allBlog._id}`}><button className="btn glass bg-black text-white">Details</button></Link>
          <button
            onClick={() => handleAddToWishlist(_id)}
            className="btn glass bg-cyan-800 text-white rounded"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsCard;
