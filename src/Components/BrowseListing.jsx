import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import RoomList from './RoomList';
import Loading from './Loading';

const BrowseListing = () => {
    const roomData=useLoaderData()
    console.log(roomData);
    return (
        <div>
            <section>
                <Navbar></Navbar>
                
            </section>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 h-20 '>
                {
                    roomData.map(room=><RoomList room={room}></RoomList>)
                }
            </section>
           
            <section className='mt-350'>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default BrowseListing;