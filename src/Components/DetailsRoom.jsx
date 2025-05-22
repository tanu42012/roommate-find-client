import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const DetailsRoom = () => {
    const [count, setCount] = useState(0);
    const data= useLoaderData();
    console.log(data)


    const{availability,contactInfo,description,lifestylePreferences,location,rentAmount,roomType,title,_id}=data;
    fetch(`http://localhost:3000/add-room/${data?._id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })

        const handleLike=()=>{
            console.log('like add');
            setCount(prevCount => prevCount + 1);
        }
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="card bg-gray-300 w-96 mt-6 mx-auto ">
                <NavLink to='' className=" btn rounded-xl text-2xl font-bold"> Room Specification</NavLink>
              
                <div className="card-body ">
               
                    <h2 className="card-title">
                       Title: {data.title}
                       
                    </h2>
                   <h2 className="card-title">Location: {location}</h2>
                   <h2 className="card-title">Room-Type: {roomType}</h2>
                   <h2 className="card-title">Room-Rent: {rentAmount}</h2>
                   <h2 className="card-title">Lifestyle-Preferences: {lifestylePreferences}</h2>
                   <h2 className="card-title">Contact-No: {contactInfo}</h2>
                   <h2 className="card-title">Availability: {availability}</h2>
                   <h2 className="card-title"> Description: {description}</h2>
                   <h2 className="card-title text-blue-600">Count: {count}</h2>
                   
                   
                    
                    <div className="card-actions justify-end">
                 
                        
                        <NavLink onClick={handleLike}   to='' className="btn  rounded-xl">Like</NavLink>
                
                    </div>
                </div>
                
            </div>
            <div className='mt-6'>
                    <Footer></Footer>
                </div>
        </div>
    );
};

export default DetailsRoom;