import React from 'react';
import { useLoaderData } from 'react-router';
import RoomList from '../Components/RoomList';
import Navbar from '../Components/Navbar';

const AllItems = () => {
    const roomData = useLoaderData();
    console.log(roomData);
    return (
        <div>
            <div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6  h-20'>
                {
                    roomData.map(room => <RoomList room={room}></RoomList>)
                }
            </div>
        </div>
    );
};

export default AllItems;