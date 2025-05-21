import React from 'react';
import { NavLink } from 'react-router';

const RoomData = ({room}) => {
    const{title,location,roomType,rentAmount }= room;
    return (
        <div>
            <div className="card bg-gray-300 w-96 shadow-sm">
                <h1 className="text-2xl font-bold">Room Details</h1>
              
                <div className="card-body">
                    <h2 className="card-title">
                       Title: {title}
                       
                    </h2>
                   <h2 className="card-title">Location: {location}</h2>
                    
                    <div className="card-actions justify-end">
                        
                        <NavLink to='/details' className="btn btn-primary rounded-xl">See More</NavLink>
                
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoomData;