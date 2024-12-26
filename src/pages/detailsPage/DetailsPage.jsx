import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';


const DetailsPage = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:5000/recentBlogs/${id}`)
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
        <div>
           <h2 className='text-center text-2xl font-bold my-5'>This is Details Page</h2>
        <div>
        <DetailsCard detail={details} />
        </div>
        </div>
    );
};

export default DetailsPage;