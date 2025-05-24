import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateData = () => {
    const data=useLoaderData();
   
    const[title,setTitle]=useState(data?.title);
    const[location,setLocation]=useState(data?.location);
    const[rentAmount,setRentAmount]=useState(data?.rentAmount);
    const[roomType,setRoomType]=useState(data?.roomType);
    const[lifestylePreferences,setLifestylePreferences]=useState(data?.lifestylePreferences);
    const[description,setDescription]=useState(data?.description);
    const[contactInfo,setContactInfo]=useState(data?.contactInfo);
    const[availability,setAvailability]=useState(data?.availability);

    // console.log(title);
    const handleUpdateData=(e)=>{
        e.preventDefault();
        console.log("update click")

        const updateData={
            title,location,rentAmount,roomType,lifestylePreferences,description,contactInfo,availability,

        }
        fetch(`https://roommate-finder-website-server-xi.vercel.app/add-room/${data?._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateData),

        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data?.modifiedCount>0)
                Swal.fire('Data Updated Successfully')
        });
    }
    return (
        <div>
             <div>
            <Navbar></Navbar>
            <div className='p-12 text-center space-y-4'>
                <h2 className='text-4xl font-bold'>Update Room Details Here</h2>
            </div>

            <form onSubmit={handleUpdateData} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Title</label>
                        <input type="text" name='title' className="input w-full" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder="Title" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Location
                        </label>
                        <input type="text" name='location'
                        value={location}
                        onChange={(e)=>setLocation(e.target.value)}

                        className="input  w-full" placeholder="Add Location" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Rent Amount
                        </label>
                        <input type="text" name='rentAmount'
                        value={rentAmount} 
                        onChange={(e)=>setRentAmount(e.target.value)}
                        className="input  w-full" placeholder="Rent Amount" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Room Type
                        </label>
                        <input type="text" name='roomType'
                        value={roomType}
                        onChange={(e)=>setRoomType(e.target.value)}
                         className="input  w-full" placeholder="Room Type" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Lifestyle Preferences
                        </label>
                        <input type="text" name='lifestylePreferences' 
                        value={lifestylePreferences}
                        onChange={(e)=>setLifestylePreferences(e.target.value)}
                        className="input  w-full" placeholder="Lifestyle Preferences" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Description

                        </label>
                        <input type="text" name='description' 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        className="input  w-full" placeholder="Description" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Contact Info
                        </label>
                        <input type="text" name='contactInfo' 
                        value={contactInfo}
                        onChange={(e)=>setContactInfo(e.target.value)}
                        className="input  w-full" placeholder="Contact Info" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Availability
                        </label>
                        <input type="text" name='availability' 
                        value={availability}
                        onChange={(e)=>setAvailability(e.target.value)}
                        className="input  w-full" placeholder="Availability" />
                    </fieldset>



                </div>
                <div className='mt-4'>
                    <input type="submit" className='btn w-full' value='Update Details' />
                </div>
            </form>
            <div className='mt-4'>
                <Footer></Footer>
            </div>


        </div>
        </div>
    );
};

export default UpdateData;