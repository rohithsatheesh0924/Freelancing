import React, { useState } from 'react';
import './page3.css';
import ava1 from './ava1.svg';
import ava2 from './ava2.svg';
import ava3 from './ava3.svg';
import group1 from './group1.svg';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Page3 = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className="page3-whole-page">
      {/* Container One */}
      <div className="page3-container-one">
        <div className="page3-header">
          <div className="page3-logo-container">
            <img className="page3-logo" src={logo} alt="Logo" />
          </div>
        </div>

        <div className="page3-description">
          Are you looking to freelance or hire remote talent?
        </div>

        <div className="page3-button-group">
          <button
            className={`page3-button page3-freelancer-button ${selectedButton === 'freelancer' ? 'selected' : ''}`}
            aria-label="I’m a freelancer"
            onClick={() => handleButtonClick('freelancer')}
          >
            <div className="page3-avatar-group">
              <img className="page3-avatar" src={ava1} alt="Freelancer 1" />
              <img className="page3-avatar" src={ava2} alt="Freelancer 2" />
              <img className="page3-avatar" src={ava3} alt="Freelancer 3" />
            </div>
            <div className="page3-text-content">
              <div className="page3-button-title">I’m a freelancer</div>
              <div className="page3-button-description">I’m a freelancer looking for work</div>
            </div>
            <div className="page3-icon-container">
              <input 
                type="checkbox" 
                className="page3-checkbox" 
                checked={selectedButton === 'freelancer'}
                readOnly
              />
            </div>
          </button>

          <button
            className={`page3-button page3-employer-button ${selectedButton === 'employer' ? 'selected' : ''}`}
            aria-label="I want to hire employees"
            onClick={() => handleButtonClick('employer')}
          >
            <div className="page3-avatar-group">
              <img className="page3-avatar" src={ava1} alt="Employer 1" />
              <img className="page3-avatar" src={ava2} alt="Employer 2" />
              <img className="page3-avatar" src={ava3} alt="Employer 3" />
            </div>
            <div className="page3-text-content">
              <div className="page3-button-title">I want to hire employees</div>
              <div className="page3-button-description">I’m an employer hiring remote talent</div>
            </div>
            <div className="page3-icon-container">
              <input 
                type="checkbox" 
                className="page3-checkbox" 
                checked={selectedButton === 'employer'}
                readOnly
              />
            </div>
          </button>

          <Link to ="/step1"> <button
            className="page3-next-button"
            aria-label="Proceed to the next step"
            // Add onClick handler for navigation if needed
          >
            <div className="page3-next-text">Next</div>
          </button> </Link>
        </div>
      </div>

      {/* Container Two */}
      <div className="page3-container-two">
        <div className="page3-text-section">
          <p className="page3-quote">“ The secret of getting ahead is getting started ”</p>
          <p className="page3-subheading">Spare a minute to kickstart your career</p>
        </div>
        <div className="page3-shape">
          <img src={group1} alt="Shape" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
