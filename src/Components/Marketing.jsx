import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Marketing = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
                <h1 className="text-3xl font-bold text-center">Our Marketing Strategy</h1>

                <p>
                    At <strong>Find Roommate</strong>, we believe that the right marketing isn’t about ads — it’s about helping people find the right place and the right roommate. Our strategy focuses on building trust, growing an active community, and reaching those who need us the most.
                </p>

                <h2 className="text-2xl font-semibold">🎯 Target Audience</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>University students looking for shared housing</li>
                    <li>Young professionals relocating for work</li>
                    <li>Budget-conscious individuals in major cities</li>
                    <li>Expats, freelancers, and digital nomads</li>
                </ul>

                <h2 className="text-2xl font-semibold">📈 Key Marketing Channels</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Social Media:</strong> Instagram, Facebook, and TikTok for daily content & listing promotion</li>
                    <li><strong>SEO & Blog:</strong> Helpful articles on moving, roommate tips, and city guides</li>
                    <li><strong>Email Campaigns:</strong> Smart onboarding, listing updates, and roommate tips</li>
                    <li><strong>Campus Partnerships:</strong> Collaborations with universities and student communities</li>
                    <li><strong>Referral Program:</strong> Rewards for users who bring in others</li>
                </ul>

                <h2 className="text-2xl font-semibold">💬 Brand Messaging</h2>
                <p>
                    Our tone is friendly, supportive, and solution-focused. We highlight convenience, safety, and connection — showing users that they can find not just a room, but the right person to share it with.
                </p>

                <h2 className="text-2xl font-semibold">📊 Growth Goals</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Grow user base to 100,000+ across major cities</li>
                    <li>Establish presence in 20+ universities by end of year</li>
                    <li>Achieve 80%+ listing engagement rate via smart filters</li>
                </ul>

                <h2 className="text-2xl font-semibold">🤝 Join the Movement</h2>
                <p>
                    Whether you're a user, a campus partner, or an ambassador — we welcome collaboration. Let’s help more people find their perfect roommate and build a better shared living experience.
                </p>

                <div className="text-center pt-4">
                    <a href="mailto:marketing@findroommate.com" className="text-blue-600 underline">
                        marketing@findroommate.com
                    </a>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Marketing;