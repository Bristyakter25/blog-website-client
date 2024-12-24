

const RecentBlogCard = ({recentBlog}) => {
    const {title,description,photo} = recentBlog;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img className="w-full h-[230px]"
      src={photo}
      alt="blogs" />
  </figure>
  <div className="card-body bg-cyan-200">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default RecentBlogCard;