import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Branding = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
                <h1 className="text-3xl font-bold text-center">Our Brand</h1>

                <p>
                    At <strong>Find Roommate</strong>, our brand reflects simplicity, trust, and community. We help people connect and create comfortable, affordable living experiences through responsible roommate matching.
                </p>

                <h2 className="text-2xl font-semibold">🎯 Brand Mission</h2>
                <p>
                    To make finding a roommate easy, safe, and stress-free by building a platform that values transparency and connection.
                </p>

                <h2 className="text-2xl font-semibold">🌟 Brand Values</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Trust:</strong> Verified users and secure communication</li>
                    <li><strong>Inclusivity:</strong> A platform for all backgrounds and preferences</li>
                    <li><strong>Ease of Use:</strong> Clean design and user-first experience</li>
                    <li><strong>Community:</strong> Connecting people, not just listings</li>
                </ul>

                <h2 className="text-2xl font-semibold">🗣 Brand Voice</h2>
                <p>
                    Friendly, respectful, clear, and helpful. We speak to our users like a reliable friend who’s always ready to help them find the right living situation.
                </p>

                <h2 className="text-2xl font-semibold">🎨 Visual Identity</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Logo:</strong> Simple, house-inspired design representing connection and comfort</li>
                    <li><strong>Primary Colors:</strong> Calm blues, warm neutrals, and accents of green</li>
                    <li><strong>Typography:</strong> Modern, rounded fonts for a friendly and accessible look</li>
                    <li><strong>Icons:</strong> Clean, intuitive, and universally recognizable</li>
                </ul>

                <h2 className="text-2xl font-semibold">📦 Brand Assets</h2>
                <p>
                    Need our logo or press kit? Contact us at
                    <a href="mailto:brand@findroommate.com" className="text-blue-600"> brand@findroommate.com</a> or visit our brand asset download page (coming soon).
                </p>

                <blockquote className="italic text-center text-gray-500">
                    “We’re not just helping you find a place — we’re helping you find your people.”
                </blockquote>
            </div>
            <div>
               <Footer></Footer>
            </div>

        </div>
    );
};

export default Branding;