

const WishListCard = ({wishList}) => {

  
  const {title,longDescription,photo} = wishList;
  return (
      <div >
          <div className="card dark:bg-purple-700 card-compact bg-base-100 lg:w-full w-[330px] mx-auto mb-10 shadow-xl">
<figure>
  <img 
    src={photo}
    alt="blog"
    className="w-full h-[250px] lg:h-[350px]" />
</figure>
<div className="card-body ">
  <h2 className="card-title">{title}</h2>
  <p>{longDescription}</p>
  <div className="card-actions justify-end">
    
   
  </div>
</div>
</div>
      </div>
  );
};

export default WishListCard;