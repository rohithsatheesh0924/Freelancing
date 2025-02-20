import React from 'react';
import './step4.css';
import step4 from './step4.svg';
import location from './location.svg';
import backArrow from './backarrow.svg'; // Add this line to import the back arrow icon

const Step4 = () => {
    return (
        <div className="profile-container">
            <header className="step-header">
                <h3>Step 4 of 4: Publish page</h3>
            </header>
            <section className="verification-section">
                <h2>Verify your profile</h2>
                <p>This is how a client sees your page</p>
            </section>

            <div className="profile-card">
                <div className="profile-header">
                    <img src={step4} alt="Profile header" />
                </div>
                <div className="profile-details">
                    <div className="profile-name">
                        <h2>Parameswaran S</h2>
                        <h5>@paramesh_14</h5>
                    </div>
                    <div className="profile-rating">
                        <span>⭐ 5.0 (17)</span> <span>👜 7 jobs</span>
                    </div>
                    <p>Intermediate Web Developer</p>
                    <div className="profile-location">
                        <span><img src={location} alt="Location icon" /> Coimbatore, India</span>
                        <span>English +2 more</span>
                    </div>
                </div>
                <div className="profile-description">
                    <p>I'm a developer experienced in building websites for small and medium-sized businesses. Whether you're trying to win work, list your services, or create a new online store, I can help. To leverage my passion for artificial intelligence (AI) in the field of automation, I aim to continuously learn, explore, and contribute to the advancements in AI, machine learning. Through lifelong learning and collaboration with experts, I strive to become a respected leader, shaping the future of AI implementation in automation. And also in the UX/UI design field.</p>
                </div>

                <div className="profile-skills">
                    <button>Technology</button>
                    <button>Web Designing</button>
                    <button>App Development</button>
                </div>

                {/* Add the complete button */}
                <button className="complete-button">Complete</button>

            </div>

        
        </div>
    );
};

export default Step4;