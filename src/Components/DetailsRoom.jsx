
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from './Loading';

const DetailsRoom = () => {
    const { id } = useParams(); // get ID from URL
    const [roomData, setRoomData] = useState(null);
    // const [count, setCount] = useState(0);


    const [count, setCount] = useState(() => {
        const stored = localStorage.getItem(`like-count-${id}`);
        return stored ? parseInt(stored) : 0;
    });
    useEffect(() => {
        fetch('https://roommate-finder-website-server-xi.vercel.app/add-room')
            .then(res => res.json())
            .then(data => {
                const matchedRoom = data.find(room => room._id === id);
                setRoomData(matchedRoom);
            });
    }, [id]);
  

    // const handleLike = () => {
    //     setCount(prev => prev + 1);
    // };

    const handleLike = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(`like-count-${id}`, newCount.toString());
    };
  

    if (!roomData) return <p className="text-center mt-10"><Loading></Loading></p>;

    const {
        availability,
        contactInfo,
        description,
        lifestylePreferences,
        location,
        rentAmount,
        roomType,
        title,
    } = roomData;

    return (
        <div>
            <Navbar />
            <div className="card bg-gray-300 w-96 mt-6 mx-auto">
                <NavLink to="" className="btn rounded-xl text-2xl font-bold">
                    Room Specification
                </NavLink>

                <div className="card-body">
                    <h2 className="card-title">Title: {title}</h2>
                    <h2 className="card-title">Location: {location}</h2>
                    <h2 className="card-title">Room-Type: {roomType}</h2>
                    <h2 className="card-title">Room-Rent: {rentAmount}</h2>
                    <h2 className="card-title">Lifestyle-Preferences: {lifestylePreferences}</h2>
                    <h2 className="card-title text-blue-600">Contact-No:{count > 0 && (
                        <h2 className="card-title">{contactInfo}</h2>
                    )}</h2>
                    <h2 className="card-title">Availability: {availability}</h2>
                    <h2 className="card-title">Description: {description}</h2>
                    <h2 className="card-title text-blue-600">Count: {count}   people Interest This Person</h2>

                    <div className="card-actions justify-end">
                        <NavLink onClick={handleLike} to="" className="btn rounded-xl">
                            Like
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <Footer />
            </div>
        </div>
    );
};

export default DetailsRoom;