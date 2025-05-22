import React from 'react';
import { useLoaderData } from 'react-router';
import RoomData from './RoomData';

const Home = () => {
    const roomData = useLoaderData();
    console.log(roomData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-24'>
         {
               roomData.slice(0,6).map(room=><RoomData key={room._id} room={room}></RoomData>)
         }
            
        </div>
    );
};

export default Home;