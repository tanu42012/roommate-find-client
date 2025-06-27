import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
                <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>

                <p>
                    At <strong>Find Roommate</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
                </p>

                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Account Info:</strong> Name, email, profile photo, contact details.</li>
                    <li><strong>Listing Info:</strong> Room details, availability, preferences.</li>
                    <li><strong>Usage Data:</strong> Pages visited, actions taken, device/browser information.</li>
                </ul>

                <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>To connect you with potential roommates or listings</li>
                    <li>To personalize your dashboard experience</li>
                    <li>To improve our platform and user support</li>
                    <li>To send important updates or notifications</li>
                </ul>

                <h2 className="text-xl font-semibold">3. Data Sharing</h2>
                <p>
                    We do not sell your personal data. We only share necessary information to enable communication between users (e.g., in chat or listing details) or as required by law.
                </p>

                <h2 className="text-xl font-semibold">4. Your Choices</h2>
                <p>
                    You can update or delete your profile at any time. If you wish to deactivate your account or request data removal, contact us directly.
                </p>

                <h2 className="text-xl font-semibold">5. Security</h2>
                <p>
                    We use industry-standard security practices to protect your data. However, no method is 100% secure. Always use strong passwords and stay alert.
                </p>

                <h2 className="text-xl font-semibold">6. Children’s Privacy</h2>
                <p>
                    Our platform is intended for users 18 years and older. We do not knowingly collect information from anyone under 18.
                </p>

                <h2 className="text-xl font-semibold">7. Changes to This Policy</h2>
                <p>
                    We may update this policy from time to time. Changes will be posted on this page with the updated date.
                </p>

                <h2 className="text-xl font-semibold">8. Contact Us</h2>
                <p>
                    If you have any questions or concerns about our Privacy Policy, contact us at
                    <a href="mailto:privacy@findroommate.com" className="text-blue-600"> privacy@findroommate.com</a>.
                </p>
            </div>
            <div>
               <Footer></Footer>
            </div>


        </div>
    );
};

export default Privacy;