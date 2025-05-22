
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const DetailsRoom = () => {
    const { id } = useParams(); // get ID from URL
    const [roomData, setRoomData] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/add-room')
            .then(res => res.json())
            .then(data => {
                const matchedRoom = data.find(room => room._id === id);
                setRoomData(matchedRoom);
            });
    }, [id]);

    const handleLike = () => {
        setCount(prev => prev + 1);
    };

    if (!roomData) return <p className="text-center mt-10">Loading or room not found...</p>;

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
                    <h2 className="card-title text-blue-600">Count: {count}</h2>

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