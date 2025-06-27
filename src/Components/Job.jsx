import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Job = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-800">
                <h1 className="text-3xl font-bold text-center">Join Our Team</h1>
                <p className="text-center text-gray-600">
                    At <strong>Find Roommate</strong>, we’re on a mission to simplify the process of finding and offering shared housing.
                    If you’re passionate about building helpful tech, love startups, or want to make housing accessible — we’d love to hear from you!
                </p>

                {/* Job Listings */}
                <div className="space-y-6">
                    {/* Job Card 1 */}
                    <div className="bg-white shadow-md rounded p-6">
                        <h2 className="text-xl font-semibold">Frontend Developer (React)</h2>
                        <p className="text-gray-600">Location: Remote / Dhaka Office</p>
                        <p className="mt-2">
                            We’re looking for a skilled React developer to help us improve the user experience and performance of our platform.
                        </p>
                        
                    </div>

                    {/* Job Card 2 */}
                    <div className="bg-white shadow-md rounded p-6">
                        <h2 className="text-xl font-semibold">Content & Community Manager</h2>
                        <p className="text-gray-600">Location: Remote</p>
                        <p className="mt-2">
                            Are you good at writing, community engagement, or social media strategy? Help us connect with our audience better.
                        </p>
                        
                    </div>

                    {/* Job Card 3 */}
                    <div className="bg-white shadow-md rounded p-6">
                        <h2 className="text-xl font-semibold">Customer Support Executive</h2>
                        <p className="text-gray-600">Location: Hybrid (Dhaka)</p>
                        <p className="mt-2">
                            Help our users find the answers they need and ensure they have a smooth experience on the platform.
                        </p>
                        
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-gray-500 pt-6">
                    Don’t see a role that fits? Email us at <a href="mailto:careers@findroommate.com" className="text-blue-600">careers@findroommate.com</a>
                </div>
            </div>
            <div>
               <Footer></Footer>
            </div>

        </div>
    );
};

export default Job;