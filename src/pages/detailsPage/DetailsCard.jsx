

const DetailsCard = ({detail}) => {
    const {title,category,longDescription,photo,publishingYear} = detail;
    return (
        <div className="card card-compact bg-white dark:bg-purple-700 lg:w-full w-[330px] mx-auto shadow-xl">
  <figure>
    <img className="w-full h-[250px]  lg:h-[450px]"
      src={photo}
      alt="blog" />
  </figure>
  <div className="card-body dark:bg-purple-300 bg-white">
    <h2 className=" text-2xl font-bold text-center">{title}</h2>
    <p className="text-xl mb-2">{longDescription}</p>
    <p className="text-xl mb-2"><span className="font-bold">Publishing Year:</span> {publishingYear}</p>
    <p className="text-xl mb-2"><span className="font-bold"> Category:</span>{category}</p>
    
  </div>
</div>
    );
};

export default DetailsCard;