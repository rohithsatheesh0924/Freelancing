import React from 'react';
import './profile.css'; // Importing CSS file

const FormComponent = () => {
    return (
        <div className="form-container">
            <h2>Step 1 of 4 <span className="step-highlight">Personal details</span></h2>

            {/* Profile Section */}
            <div className="profile-section">
                <div className="profile-words">
                    <h3>CREATE PROFILE</h3>
                    <p>A professional profile helps you build trust with your clients.</p>
                </div>
                <div className="profile-photo">
                    <img src="Frame 1000004003.svg" alt="photo pic" />
                    <p>+upload photo</p>
                </div>
            </div>

            {/* Personal Details Section */}
            <section className="personal-details-section">
                <h3>Personal details</h3>

                {/* Name Fields (Single Row) */}
                <div className="form-row name-row">
                    <div className="input-group name-input">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="input-group name-input">
                        <label htmlFor="middleName">Middle name</label>
                        <input type="text" id="middleName" placeholder="Enter your middle name" />
                    </div>
                    <div className="input-group name-input">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" placeholder="Enter your last name" />
                    </div>
                </div>

                {/* Other Personal Details Fields */}
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" placeholder="DD/MM/YYYY" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="mailId">Mail id</label>
                        <input type="email" id="mailId" placeholder="Enter your personal mail id" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="alternateMailId">Alternate Mail id</label>
                        <input type="email" id="alternateMailId" placeholder="Enter your alternative mail id" />
                    </div>
                    <div className="input-group mobile-number-input">
                        <label htmlFor="mobileNumber">Mobile number</label>
                        <div className="mobile-input">
                            <button className="mobile-country-code">+91</button>
                            <input type="tel" id="mobileNumber" placeholder="10-digit number" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Residential Details Section */}
            <section className="residential-details-section">
                <h3>Residential details</h3>
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="country">Country</label>
                        <select id="country">
                            <option>Select your country</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="pincode">Pincode</label>
                        <input type="text" id="pincode" placeholder="Enter your pincode" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="state">State</label>
                        <select id="state">
                            <option>Select your state</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="city">City</label>
                        <select id="city">
                            <option>Select your city</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="doorNumber">Door number</label>
                        <input type="text" id="doorNumber" placeholder="Enter your door number" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="streetAddress">Street Address</label>
                        <input type="text" id="streetAddress" placeholder="Enter your street address" />
                    </div>
                </div>
            </section>

            {/* Button Container */}
            <div className="button-container">
                <button className="back-button"><img src="Vector.svg" alt="back" /></button>
                <button className="next-button">Next</button>
            </div>
        </div>
    );
}

export default FormComponent;
