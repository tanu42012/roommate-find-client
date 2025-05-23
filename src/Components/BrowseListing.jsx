import React, { use } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router';
import RoomList from './RoomList';

import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';

const BrowseListing = () => {
     const {loading}=use(AuthContext);
    const roomData=useLoaderData()
    // console.log(roomData);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='h-1000'>
            <section>
                <Navbar></Navbar>
                
            </section>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 h-20 '>
                {
                    roomData.map(room=><RoomList room={room}></RoomList>)
                }
            </section>
            <section>
                <Outlet></Outlet>
            </section>
           
            <section className='mt-480'>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default BrowseListing;