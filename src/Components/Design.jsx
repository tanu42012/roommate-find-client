import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Design = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
                <h1 className="text-3xl font-bold text-center">Design Philosophy</h1>

                <p>
                    The design of <strong>Find Roommate</strong> is guided by clarity, simplicity, and a user-first mindset. Every visual element on our platform is crafted to support seamless navigation, build trust, and help users find their ideal shared home.
                </p>

                <h2 className="text-2xl font-semibold">🎨 Design Goals</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Clarity:</strong> Clean layouts that highlight the most important information</li>
                    <li><strong>Consistency:</strong> Reusable design patterns across all pages</li>
                    <li><strong>Accessibility:</strong> High contrast, readable fonts, and mobile-first responsiveness</li>
                    <li><strong>Warmth & Trust:</strong> Friendly colors, rounded buttons, and gentle shadows</li>
                </ul>

                <h2 className="text-2xl font-semibold">💡 UI Highlights</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Dashboard:</strong> Simple sidebar navigation, intuitive icons, and quick access to actions</li>
                    <li><strong>Cards:</strong> Neatly designed listing cards with photos, rent, and availability at a glance</li>
                    <li><strong>Forms:</strong> Minimalist with floating labels and error handling</li>
                    <li><strong>Dark Mode:</strong> Toggle-ready for night browsing comfort</li>
                </ul>

                <h2 className="text-2xl font-semibold">📱 Responsive Design</h2>
                <p>
                    We prioritize mobile users. All pages adjust smoothly across phones, tablets, and desktops using Tailwind CSS and Flex/Grid layouts.
                </p>

                <h2 className="text-2xl font-semibold">🛠 Tools & Frameworks</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Tailwind CSS for utility-first styling</li>
                    <li>React + React Router for component-based UI</li>
                    <li>Heroicons / React Icons for clean visuals</li>
                    <li>SweetAlert2 for friendly modals</li>
                </ul>

                <blockquote className="italic text-center text-gray-500">
                    “Good design makes the experience invisible — smooth, simple, and human.”
                </blockquote>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Design;