import { useState, useEffect, useContext } from "react";
import WishListCard from "./WishListCard";
import AuthContext from "../../context/AuthContext";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [addWishList, setAddWishList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (user?.email) {
      setLoading(true); // Set loading to true when fetching starts
      fetch("https://blog-website-server-blush.vercel.app/wishList")
        .then((res) => res.json())
        .then((data) => {
          setAddWishList(data);
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
          setLoading(false); // Stop loading even in case of error
        });
    }
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto mt-52 ">
      <h1 className="text-3xl font-bold mb-5 text-center">My Wishlist</h1>

      {/* Show loading spinner while fetching */}
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-infinity text-purple-500 w-36"></span>
        </div>
      ) : (
        <div>
          {addWishList.length > 0 ? (
            addWishList.map((wishList) => (
              <WishListCard key={wishList._id} wishList={wishList} />
            ))
          ) : (
            <p className="text-center text-gray-500">No items in your wishlist.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WishList;
