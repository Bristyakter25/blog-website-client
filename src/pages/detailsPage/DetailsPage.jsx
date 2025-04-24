import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';


const DetailsPage = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://blog-website-server-blush.vercel.app/recentBlogs/${id}`)
        .then((res)=> res.json())
        .then((data) =>{
            setDetails(data);
            setLoading(false);
        })

    },[id])
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div  className='lg:mt-32 pt-14 mt-40 '>
           <h2 className='text-center text-3xl font-bold my-5'>This is  Details Page</h2>
        <div className='lg:w-[1000px] w-[350px] mx-auto'>
        <DetailsCard detail={details} />
        </div>
        </div>
    );
};

export default DetailsPage;