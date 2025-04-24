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
    <div className="card bg-white mx-auto dark:bg-purple-700 w-[330px] lg:w-full h-[700px] shadow-xl">
      <figure>
        <img className="w-full h-[250px] lg:h-[300px]" src={photo} alt="blog" />
      </figure>
      <div className="lg:p-8 h-[350px]  p-3">
        <h2 className="lg:text-3xl mb-2 text-xl text-cyan-500 font-bold">{title}</h2>
        <p className="lg:text-xl mb-2 text-[16px] ">{longDescription}</p>
        <p className="lg:text-xl mb-2 text-[16px] "><span className="font-bold ">Category:</span> {category}</p>
        <div className="card-actions justify-end">
          <Link to={`/addBlogs/${_id}`}>
            <button className="btn glass hover:bg-purple-200 bg-[#6C48C5] hover:text-purple-700 text-white ">Details</button>
          </Link>
          <button
            onClick={() => handleAddToWishlist(_id)}  
            className="btn hover:bg-purple-200 glass hover:text-purple-700  bg-[#A294F9] text-white rounded"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsCard;