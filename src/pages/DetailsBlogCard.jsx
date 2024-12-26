

const DetailsBlogCard = ({detail}) => {
    const{title,category,longDescription,photo,publishingYear} = detail;
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
    
  </div>
</div>
    );
};

export default DetailsBlogCard;



// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/useAuth"; // Custom hook to fetch logged-in user details

// const DetailsBlogCard = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const { user } = useAuth(); // Assuming this hook gives the current user details
//     const [details, setDetails] = useState(null);
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState("");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Fetch blog details
//         fetch(`http://localhost:5000/addBlogs/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setDetails(data);
//                 setLoading(false);
//             });

//         // Fetch comments
//         fetch(`http://localhost:5000/comments/${id}`)
//             .then((res) => res.json())
//             .then((data) => setComments(data));
//     }, [id]);

//     const handleAddComment = () => {
//         if (!newComment) {
//             alert("Comment cannot be empty!");
//             return;
//         }

//         const commentData = {
//             blogId: id,
//             comment: newComment,
//             userName: user.name,
//             userProfilePic: user.profilePic,
//             userEmail: user.email,
//         };

//         fetch("http://localhost:5000/comments", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(commentData),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.insertedId) {
//                     setComments((prev) => [...prev, commentData]);
//                     setNewComment("");
//                 }
//             });
//     };

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     const isBlogOwner = details.email === user.email;

//     return (
//         <div>
//             {/* Blog Details */}
//             <h2>{details.title}</h2>
//             <p>{details.content}</p>
//             <p>Written by: {details.authorName}</p>

//             {/* Conditional Comment Section */}
//             {isBlogOwner ? (
//                 <p>You cannot comment on your own blog.</p>
//             ) : (
//                 <div>
//                     <textarea
//                         value={newComment}
//                         onChange={(e) => setNewComment(e.target.value)}
//                         placeholder="Add a comment"
//                     ></textarea>
//                     <button onClick={handleAddComment}>Post Comment</button>
//                 </div>
//             )}

//             {/* Comments List */}
//             <div>
//                 <h3>Comments</h3>
//                 {comments.length > 0 ? (
//                     comments.map((comment) => (
//                         <div key={comment._id} className="comment">
//                             <img src={comment.userProfilePic} alt={comment.userName} width={30} />
//                             <p>
//                                 <strong>{comment.userName}:</strong> {comment.comment}
//                             </p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No comments yet.</p>
//                 )}
//             </div>

//             {/* Update Button */}
//             {isBlogOwner && (
//                 <button onClick={() => navigate(`/updateBlog/${id}`)}>
//                     Update Blog
//                 </button>
//             )}
//         </div>
//     );
// };

// export default DetailsBlogCard;
