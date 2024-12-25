

const AllBlogsCard = ({ allBlog }) => {
  

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
          <button className="btn glass bg-cyan-800 text-white">Details</button>
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

export default AllBlogsCard;
