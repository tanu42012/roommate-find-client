import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
                <h1 className="text-3xl font-bold text-center">Terms of Use</h1>
                <p>
                    By accessing and using the <strong>Find Roommate</strong> website, you agree to comply with and be bound by the following terms and conditions.
                    If you do not agree with any part of these terms, please do not use the platform.
                </p>

                <h2 className="text-xl font-semibold">1. User Responsibilities</h2>
                <p>
                    Users are responsible for the accuracy of all information provided, including listing details, contact information, and roommate preferences.
                    Misuse of the platform, including posting false or harmful information, may result in account suspension or termination.
                </p>

                <h2 className="text-xl font-semibold">2. Account Security</h2>
                <p>
                    You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.
                </p>

                <h2 className="text-xl font-semibold">3. Listing and Communication</h2>
                <p>
                    All listings must comply with local housing laws. Communication through the platform must remain respectful and free from harassment or discrimination.
                </p>

                <h2 className="text-xl font-semibold">4. Platform Limitations</h2>
                <p>
                    Find Roommate is a listing and connection platform. We do not guarantee roommate compatibility, and we are not responsible for disputes between users.
                </p>

                <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
                <p>
                    We may update these Terms of Use at any time. Continued use of the platform after updates means you accept the new terms.
                </p>

                <h2 className="text-xl font-semibold">6. Contact</h2>
                <p>
                    If you have questions or concerns regarding these terms, please contact us at
                    <a href="mailto:support@findroommate.com" className="text-blue-600"> support@findroommate.com</a>.
                </p>
            </div>
            <div>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Terms;
