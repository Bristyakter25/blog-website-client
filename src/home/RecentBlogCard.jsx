

const RecentBlogCard = ({blog}) => {
    const {title,description} = blog;
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default RecentBlogCard;