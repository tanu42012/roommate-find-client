import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';

const AddRoom = () => {
    const handleAddDetails = e => {
        e.preventDefault();
        const form = e.target;
        const formData=new FormData(form);
        const newRoomData=Object.fromEntries(formData.entries())
        // console.log( newRoomData);


        fetch('https://roommate-finder-website-server-xi.vercel.app/add-room',{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body: JSON.stringify( newRoomData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
                Swal.fire({
                    title: "Successfully Added!",
                    icon: "success",
                    draggable: true
                  });
                  form.reset();
            }
            // console.log(data)
        })




    }
    return (
        <div>
            
            <div className='p-12 text-center space-y-4'>
                <h2 className='text-4xl font-bold'>Add Room Details Here</h2>
            </div>

            <form onSubmit={handleAddDetails}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Title" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Location
                        </label>
                        <input type="text" name='location' className="input  w-full" placeholder="Add Location" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Rent Amount
                        </label>
                        <input type="text" name='rentAmount' className="input  w-full" placeholder="Rent Amount" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Room Type
                        </label>
                        <input type="text" name='roomType' className="input  w-full" placeholder="Room Type" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Lifestyle Preferences
                        </label>
                        <input type="text" name='lifestylePreferences' className="input  w-full" placeholder="Lifestyle Preferences" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Description

                        </label>
                        <input type="text" name='description' className="input  w-full" placeholder="Description" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Contact Info
                        </label>
                        <input type="text" name='contactInfo' className="input  w-full" placeholder="Contact Info" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Availability
                        </label>
                        <input type="text" name='availability' className="input  w-full" placeholder="Availability" />
                    </fieldset>



                </div>
                <div className='mt-4'>
                    <input type="submit" className='btn w-full' value='Add Details' />
                </div>
            </form>
            <div className='mt-4'>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default AddRoom;