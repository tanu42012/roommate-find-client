import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import RoomDetails from './RoomDetails';

const Details = () => {
    const roomData=useLoaderData();
    // console.log(roomData);
    return (
        <div>
            <section>
                <Navbar></Navbar>

            </section >
            <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 h-20 '>
            {
                roomData.map(room=><RoomDetails key={room._id} room={room}></RoomDetails>)
            }
            </section>
           
           
             <section className='mt-700'>
                <Footer></Footer>

             </section>
        </div>
    );
};

export default Details;