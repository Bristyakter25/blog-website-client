

const WishListCard = ({wishList}) => {
    const {title,description,photo} = wishList;
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
           <img src={photo} alt="" />
        </div>
    );
};

export default WishListCard;