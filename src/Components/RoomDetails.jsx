import React from 'react';
import { NavLink } from 'react-router';
import Footer from './Footer';


const RoomDetails = ({room}) => {
    const{availability,contactInfo,description,lifestylePreferences,location,rentAmount,roomType,title,_id}=room;

    const handleLike=()=>{
        console.log('like click')

    }
    return (
      <section>
          <div>
             <div className="card bg-gray-300 w-96 ">
                <NavLink to='/single' className=" btn rounded-xl text-2xl font-bold">Click Room Details</NavLink>
              
                <div className="card-body">
                    <h2 className="card-title">
                       Title: {title}
                       
                    </h2>
                   <h2 className="card-title">Location: {location}</h2>
                   <h2 className="card-title">Room-Type: {roomType}</h2>
                   <h2 className="card-title">Room-Rent: {rentAmount}</h2>
                   <h2 className="card-title">Lifestyle-Preferences: {lifestylePreferences}</h2>
                   {/* <h2 className="card-title">Contact-No: {contactInfo}</h2> */}
                   <h2 className="card-title">Availability: {availability}</h2>
                   <h2 className="card-title"> Description: {description}</h2>
                    
                    <div className="card-actions justify-end">
                        
                        <NavLink onClick={handleLike} to='' className="btn  rounded-xl">Like</NavLink>
                
                    </div>
                </div>
            </div>
           
            
        </div>
        
      </section>
      
    );
};

export default RoomDetails;