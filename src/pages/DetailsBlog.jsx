import { useContext, useEffect, useState } from "react";
import DetailsBlogCard from "./DetailsBlogCard";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";


const DetailsBlog = () => {
    const {user} = useContext(AuthContext);
    const handleAddComment = e =>{
        e.preventDefault();
        const form = e.target;

        const commentData = {
            comment: form.comment.value,
            username: user?.displayName || "Anonymous", // Username of the commenter
            userProfile: user?.photoURL || "",
        };
        console.log(commentData);

        fetch('https://blog-website-server-blush.vercel.app/addComments',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(commentData)
        })
        .then(res=> res.json())
            .then(data =>{
                if (data.insertedId){
                  Swal.fire({
                    title: "Success!",
                    text: "Your review has been submitted successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                  });
                }})
    }

    const {id} = useParams();
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);
    

    useEffect(()=>{
        fetch(`https://blog-website-server-blush.vercel.app/addBlogs/${id}`)
        .then((res)=> res.json())
        .then((data) =>{
            setDetails(data);
            setLoading(false);
        })

    },[id])
    // if (loading) {
    //   <div className="flex justify-center mt-10">
    //   <span className="loading loading-infinity text-purple-500 w-36"></span>
    // </div>
    // }
 
    return (
        <div>
           <h2 className='text-center pt-12   text-3xl lg:mt-40 mt-40 font-bold mb-5'>This is Details Page</h2>
           { loading? <> <div className="flex justify-center mt-10">
          <span className="loading loading-infinity text-purple-500 w-36"></span>
        </div></> : <><div className="lg:w-[1000px] mx-auto"><DetailsBlogCard detail={details}></DetailsBlogCard></div>
           <div className="my-5">

            {user && user.email === details?.userEmail ? (<> you cant comment </>)  : user ? 
           (<form onSubmit={handleAddComment} className="space-y-4 bg-white dark:bg-purple-600 p-6 rounded shadow">
           <div >
           

            <label className="block font-medium">Write Your Comment Here</label>
            
            <div className="flex items-center space-x-3">
            <div>
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-14 h-14 rounded-full"
            />
            <p>{user.displayName}</p>
            </div>
            <input
              type="text"
              name="comment"
              className="input input-bordered text-white w-full"
              placeholder="Enter the comments"
              required
              
            />
            </div>
          </div>
          <button type="submit" className="btn hover:bg-purple-200  hover:text-purple-700  bg-[#A294F9]  glass w-full text-white">
              Submit Blog
            </button>
           </form>) : (
    
    <p className="text-center text-red-500">Please log in to comment.</p>
  )
}

           </div>
           <div>
            {
               user && user.email === details?.userEmail ? 
                (<><Link to={`/updateBlog/${details._id}`}>
                  <button className="btn">Update</button>
                </Link></>) :  user ? 
                 (<></>) : (
    
                    <p className="text-center text-red-500">Please log in to update details.</p>
                  )
            }
           </div></>}
           {/* <div><DetailsBlogCard detail={details}></DetailsBlogCard></div>
           <div className="my-5">

            {user && user.email === details?.userEmail ? (<> you cant comment </>)  : user ? 
           (<form onSubmit={handleAddComment} className="space-y-4 bg-white dark:bg-purple-600 p-6 rounded shadow">
           <div >
           

            <label className="block font-medium">Write Your Comment Here</label>
            
            <div className="flex items-center space-x-3">
            <div>
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-14 h-14 rounded-full"
            />
            <p>{user.displayName}</p>
            </div>
            <input
              type="text"
              name="comment"
              className="input input-bordered dark:text-black w-full"
              placeholder="Enter the comments"
              required
              
            />
            </div>
          </div>
          <button type="submit" className="btn bg-sky-400 glass w-full text-white">
              Submit Blog
            </button>
           </form>) : (
    
    <p className="text-center text-red-500">Please log in to comment.</p>
  )
}

           </div>
           <div>
            {
               user && user.email === details?.userEmail ? 
                (<><Link to={`/updateBlog/${details._id}`}>
                  <button className="btn">Update</button>
                </Link></>) :  user ? 
                 (<></>) : (
    
                    <p className="text-center text-red-500">Please log in to update details.</p>
                  )
            }
           </div> */}
        </div>
    );
};

export default DetailsBlog;