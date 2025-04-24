

const WishListCard = ({wishList}) => {

  
  const {title,longDescription,photo,publishingYear,category} = wishList;
  return (
      <div >
          <div className="card dark:bg-purple-700 card-compact bg-white lg:w-full w-[330px] mx-auto mb-10 shadow-xl">
<figure>
  <img 
    src={photo}
    alt="blog"
    className="w-full h-[200px] lg:h-[350px]" />
</figure>
<div className="card-body h-[250px]">
  <h2 className="card-title text-2xl font-bold">{title}</h2>
  <p className="my-3 h-[70px]">{longDescription}</p>
  <p > <span className=" font-bold">Publishing Year:</span> {publishingYear}</p>
  <p > <span className=" font-bold">Category: </span> {category}</p>
  <div className="card-actions justify-end">
    
   
  </div>
</div>
</div>
      </div>
  );
};

export default WishListCard;