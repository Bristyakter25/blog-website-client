import { useState, useEffect } from "react";
import WishListCard from "./WishListCard";

const WishList = () => {
  const [addWishList,setAddWishList] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/wishList')
    .then(res => res.json())
    .then(data =>{
      setAddWishList(data);
    })
  } )

  

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5 text-center">My Wishlist</h1>
      <div>
      
           {
            addWishList.map(wishList => <WishListCard key={wishList._id} wishList={wishList}></WishListCard>)
           }     
      </div>
    </div>
  );
};

export default WishList;
