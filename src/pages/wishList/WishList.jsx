import { useState, useEffect, useContext } from "react";
import WishListCard from "./WishListCard";
import AuthContext from "../../context/AuthContext";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [addWishList, setAddWishList] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://blog-website-server-blush.vercel.app/wishList/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAddWishList(data);
        })
        .catch((error) => console.error("Error fetching wishlist:", error));
    }
  }, [user]); // Dependency on user, so it refetches if the user changes

  return (
    <div className="max-w-4xl mx-auto my-44">
      <h1 className="text-3xl font-bold mb-5 text-center">My Wishlist</h1>
      <div>
        {addWishList.length > 0 ? (
          addWishList.map((wishList) => (
            <WishListCard key={wishList._id} wishList={wishList} />
          ))
        ) : (
          <p className="text-center text-gray-500">No items in your wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
