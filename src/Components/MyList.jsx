// import React, { useState } from 'react';

import { useState } from "react";
import { MdEditDocument } from "react-icons/md";
import { MdOutlineSystemUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyList = ({roomData}) => {
    const data=roomData;

    // const[roomData,setRoomData]=useState([]);
    const [myList,setMyList]=useState(data);

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/add-room/${id}`,{
                    method:'DELETE',
                    headers:{
                        "content-type":"application?json",
        
                    },
        
                }).then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount){
                        const remaining=roomData.filter(room=>room._id!==id);
                        setMyList(remaining);
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                          });
                    }
                    
                
                       
                    // console.log(data)
                })


            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });

       
        // console.log(id);
    }

    
    return (
        <div>
              <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=''>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Room-Type</th>
                            <th>Room-Rent</th>
                            <th>Lifestyle-Preferences</th>
                            <th>Contact-No</th>
                            <th>Availability</th>
                            <th>Description</th>
                            <th>Modify</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                         
                        {
                            roomData.map((room, index) => (
                                <tr key={room.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{room.title}</td>
                                    <td>{room.location}</td>
                                    <td>{room.roomType}</td>
                                    <td>{room.roomRent}</td>
                                    <td>{room.lifestylePreferences}</td>
                                    <td>{room.contactNo}</td>
                                    <td>{room.availability}</td>
                                    <td>{room.description}</td>
                                    <td className='gap-12'>
                                        <button className="btn btn-sm "><MdEditDocument /></button>
                                        <button className="btn btn-sm "><MdOutlineSystemUpdate /></button>
                                        <button onClick={()=>handleDelete(room._id)} className="btn btn-sm "><MdDelete /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MyList;