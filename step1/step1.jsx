import React, { useState } from 'react';
import './step1.css';
import profile from './profile.svg';
import back from './back.svg';
import { Link } from 'react-router-dom';

const Step1 = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mailId, setMailId] = useState('');
  const [alternateMailId, setAlternateMailId] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [doorNumber, setDoorNumber] = useState('');

  // Function to open Google Drive
  const handleUploadClick = () => {
    window.open('https://drive.google.com/drive/my-drive', '_blank');
  };

  // Function to handle mobile number input change and validation
  const handleMobileNumberChange = (e) => {
    const value = e.target.value;

    // Check if the input is a number and limit the length to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobileNumber(value);
    }
  };

  // Function to handle input changes
  const handleInputChange = (e, setStateFunc) => {
    setStateFunc(e.target.value);
  };

  // Function to validate all input fields
  const validateInputs = () => {
    if (
      firstName &&
      middleName &&
      lastName &&
      mailId &&
      alternateMailId &&
      mobileNumber &&
      country &&
      pincode &&
      state &&
      city &&
      doorNumber
    ) {
      return true;
    } else {
      alert('Please fill all the input fields');
      return false;
    }
  };

  return (
    <div className="form-container">
      <h2>
        Step 1 of 4 <span>Personal details</span>
      </h2>

      <div className="profile">
        <div className="words">
          <h3>CREATE PROFILE</h3>
          <p>A professional profile helps you build trust with your client.</p>
        </div>

        <div className="photo">
          <img src={profile} alt="Profile" />
          {/* Upload button with an onClick event to open Google Drive */}
          <button className="upload-photo-button" onClick={handleUploadClick}>
            + Upload photo
          </button>
        </div>
      </div>

      <section className="section">
        <h3>Personal details</h3>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
              placeholder="Enter your first name"
              aria-label="First name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="middleName">Middle name</label>
            <input
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => handleInputChange(e, setMiddleName)}
              placeholder="Enter your middle name"
              aria-label="Middle name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => handleInputChange(e, setLastName)}
              placeholder="Enter your last name"
              aria-label="Last name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="mailId">Mail id</label>
            <input
              type="email"
              id="mailId"
              value={mailId}
              onChange={(e) => handleInputChange(e, setMailId)}
              placeholder="Enter your personal mail id"
              aria-label="Mail id"
            />
          </div>

          <div className="input-group">
            <label htmlFor="alternateMailId">Alternate Mail id</label>
            <input
              type="email"
              id="alternateMailId"
              value={alternateMailId}
              onChange={(e) => handleInputChange(e, setAlternateMailId)}
              placeholder="Enter your alternate mail id"
              aria-label="Alternate mail id"
            />
          </div>

          <div className="input-group">
            <label htmlFor="mobileNumber">Mobile number</label>
            <div className="mobile-input">
              <button aria-label="Country code">+91</button>
              <input
                type="tel"
                id="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                placeholder="10-digit number"
                aria-label="Mobile number"
                maxLength="10" // Max length to limit the input to 10 digits
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Residential details</h3>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => handleInputChange(e, setCountry)}
              aria-label="Country"
            >
              <option>Select your country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={(e) => handleInputChange(e, setPincode)}
              placeholder="Enter your pincode"
              aria-label="Pincode"
            />
          </div>

          <div className="input-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              value={state}
              onChange={(e) => handleInputChange(e, setState)}
              aria-label="State"
            >
              <option>Select your state</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
              <option>California</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="city">City</label>
            <select
              id="city"
              value={city}
              onChange={(e) => handleInputChange(e, setCity)}
              aria-label="City"
            >
              <option>Select your city</option>
              <option>Coimbatore</option>
              <option>Bangalore</option>
              <option>Los Angeles</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="doorNumber">Door number</label>
          <input
            type="text"
            id="doorNumber"
            value={doorNumber}
            onChange={(e) => handleInputChange(e, setDoorNumber)}
            placeholder="Enter your address"
            aria-label="Door number"
          />
        </div>
      </section>

      <div className="button-container">
        <Link to="/designation">
          <button className="back-button" aria-label="Back">
            <img src={back} alt="Back" />
          </button>
        </Link>
        <Link to="/step2">
          <button className="next-button" aria-label="Next">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
