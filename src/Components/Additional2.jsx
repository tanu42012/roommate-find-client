import React from 'react';

const Additional2 = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://images.pexels.com/photos/6296925/pexels-photo-6296925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Quiet Environment there</h1>
                        <p className="mb-5">
                        Our platform allows you to browse through a wide range of listings for co-living spaces, PGs, and flats, and find the perfect match for your lifestyle and preferences. So, why wait? Start your search today and find your ideal living situation with FindMyRoom
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Additional2;