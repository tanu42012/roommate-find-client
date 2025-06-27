import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">

                <h1 className="text-3xl font-bold text-center">About Us – Find Roommate</h1>

                <p>
                    <strong>Welcome to Find Roommate</strong> — Your Trusted Roommate Matching Platform.
                </p>

                <p>
                    We understand how important it is to find the right person to share your living space with. Whether you're a student, a working professional, or someone relocating to a new city, the right roommate can make your housing experience more comfortable, affordable, and enjoyable.
                </p>

                <h2 className="text-2xl font-semibold mt-6">🏡 What We Do</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>List your room</strong> and connect with potential roommates quickly</li>
                    <li><strong>Browse available listings</strong> based on your preferences</li>
                    <li><strong>Communicate securely</strong> before making a decision</li>
                    <li><strong>Manage your listings</strong> through a personalized dashboard</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">💡 Why Choose Us?</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>User-Friendly Interface:</strong> Simple and clean experience</li>
                    <li><strong>Verified Profiles:</strong> We value safety and trust</li>
                    <li><strong>Smart Matching:</strong> We prioritize relevance in results</li>
                    <li><strong>Completely Free:</strong> No hidden fees — just helpful service</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">👤 Who It's For?</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Students looking for affordable shared housing</li>
                    <li>Working professionals seeking respectful co-living</li>
                    <li>Anyone relocating for work, study, or lifestyle changes</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">🤝 Let’s Make Finding a Roommate Easy</h2>
                <p>
                    Whether you're offering a room or searching for one, <strong>Find Roommate</strong> is designed to make the journey simple, safe, and stress-free.
                </p>

                <blockquote className="italic text-center text-gray-500">
                    Start your roommate journey with us today!
                </blockquote>

            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Error;