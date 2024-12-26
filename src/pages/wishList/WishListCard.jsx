

const WishListCard = ({wishList}) => {
    const {title,longDescription,photo} = wishList;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-full shadow-xl">
  <figure>
    <img
      src={photo}
      alt="blog" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{longDescription}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-primary">X</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default WishListCard;