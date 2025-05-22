import React from 'react';
import { NavLink } from 'react-router';

const RoomList = ({room}) => {
    const {availability,contactInfo,description,lifestylePreferences,location,rentAmount,roomType,title,_id}=room;
    const handleSeeMore=()=>{
        console.log("click see")
        fetch(`http://localhost:3000/add-room/${room?._id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
       

    }
    return (
        <div>
             <div className="card bg-gray-300 w-96 ">
                <h1 className="text-2xl font-bold">Room Details</h1>
              
                <div className="card-body">
                    <h2 className="card-title">
                       Title: {title}
                       
                    </h2>
                   <h2 className="card-title">Location: {location}</h2>
                   <h2 className="card-title">Room-Type: {roomType}</h2>
                   <h2 className="card-title">Room-Rent: {rentAmount}</h2>
                   <h2 className="card-title">Lifestyle-Preferences: {lifestylePreferences}</h2>
                   <h2 className="card-title">Contact-No: {contactInfo}</h2>
                   <h2 className="card-title">Availability: {availability}</h2>
                   <h2 className="card-title"> Description: {description}</h2>
                    
                    <div className="card-actions justify-end">
                        
                        <NavLink onClick={handleSeeMore} to={`/detailsRoom/${room?._id}`}className="btn  btn-primary rounded-xl">See More</NavLink>
                
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RoomList;