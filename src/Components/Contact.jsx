import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
                <h1 className="text-3xl font-bold text-center">Contact Us</h1>
                <p className="text-center text-gray-600">
                    We'd love to hear from you! If you have any questions, suggestions, or need support, feel free to reach out.
                </p>

                {/* Contact Information */}
                <div className="space-y-2 text-center">
                    <p><strong>Email:</strong> support@findroommate.com</p>
                    <p><strong>Phone:</strong> +880 1234 567 890</p>
                    <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                </div>

                {/* Contact Form */}
                <form className="space-y-4 bg-white shadow-md rounded-md p-6">
                    <div>
                        <label htmlFor="name" className="block font-medium">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block font-medium">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block font-medium">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Contact;