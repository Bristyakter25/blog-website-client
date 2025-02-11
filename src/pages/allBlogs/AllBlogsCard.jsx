import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";

const AllBlogsCard = ({ allBlog }) => {
  const { user } = useContext(AuthContext);
  const { title, longDescription, photo, category, _id, publishingYear } = allBlog;

  const handleAddToWishlist = (blogId) => {
    const wishListData = {
      userEmail: user.email,  // Ensure this is correctly set
      blogId: blogId,
      title: title,
      photo: photo,
      longDescription: longDescription,
      publishingYear: publishingYear,
      category: category,
    };

    fetch('https://blog-website-server-blush.vercel.app/wishList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wishListData),
    })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
                title: "Successful",
                text: "You Successfully Wish Listed This Blog",
                icon: "success"
              });
      })
      .catch((error) => console.error('Error adding wishlist:', error));
  }

  return (
    <div className="card bg-base-100 mx-auto dark:bg-purple-700 w-full shadow-xl">
      <figure>
        <img className="w-full h-[250px] lg:h-[450px]" src={photo} alt="blog" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-cyan-500 font-bold">{title}</h2>
        <p className="text-xl font-medium">{longDescription}</p>
        <p className="text-xl font-medium">Category: {category}</p>
        <div className="card-actions justify-end">
          <Link to={`/addBlogs/${_id}`}>
            <button className="btn glass bg-[#6C48C5] hover:text-purple-700 text-white ">Details</button>
          </Link>
          <button
            onClick={() => handleAddToWishlist(_id)}  
            className="btn glass hover:text-purple-700  bg-[#A294F9] text-white rounded"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsCard;