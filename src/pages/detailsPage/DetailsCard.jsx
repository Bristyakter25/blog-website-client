

const DetailsCard = ({detail}) => {
    const {title,category,longDescription,photo,publishingYear} = detail;
    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
  <figure>
    <img className="w-full h-[350px]"
      src={photo}
      alt="blog" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{longDescription}</p>
    <p>Publishing Year: {publishingYear}</p>
    <p>Category:{category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default DetailsCard;