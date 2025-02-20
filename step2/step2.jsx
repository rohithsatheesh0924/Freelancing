import React from 'react';
import Select from 'react-select';
import './step2.css'; // Import the CSS file
import vector from './vector.svg';
import back from './back.svg';
import { Link } from 'react-router-dom';

const Step2 = () => {
  const handleResumeUpload = () => {
    window.open('https://drive.google.com', '_blank');
  };

  // Options for the select dropdowns
  const degreeOptions = [
    { value: '', label: 'Select your degree' },
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: "Master's Degree" },
    { value: 'doctorate', label: 'Doctorate' },
  ];

  const courseOptions = [
    { value: '', label: 'Select your course' },
    { value: 'cs', label: 'Computer Science' },
    { value: 'eng', label: 'Engineering' },
    { value: 'biz', label: 'Business' },
  ];

  const institutionOptions = [
    { value: '', label: 'Select your institution' },
    { value: 'cit', label: 'CIT' },
    { value: 'psg', label: 'PSG' },
    { value: 'sns', label: 'SNS' },
  ];

  const languageOptions = [
    { value: '', label: 'Select languages you know' },
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
  ];

  return (
    <div className="container">
      <div className="main">
        <h3>Step 2 of 4 Add your Skills</h3>
      </div>
      <div className="mainone">
        <div className="skills">
          <div className="skillsone">
            <h3>Skills</h3>
          </div>
          <div className="fine">
            <div className="skillstwo">
              <h5>Skills</h5>
              <input
                type="text"
                placeholder="Add specific skills to your bio"
              />
            </div>
            <div className="skillsthree">
              <h5>Bio</h5>
              <textarea
                placeholder="Add a few sentences to describe yourself"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <div className="educationone">
          <h3>Education</h3>
        </div>
        <div className="educationtwo">
          <div className="edu">
            <h5>Select Degree</h5>
            <Select
              options={degreeOptions}
              placeholder="Select your degree"
              styles={{
                control: (base) => ({
                  ...base,
                  width: '300px',
                  padding: '2px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }),
              }}
            />
          </div>
          <div className="edu">
            <h5>Select Course</h5>
            <Select
              options={courseOptions}
              placeholder="Select your course"
              styles={{
                control: (base) => ({
                  ...base,
                  width: '300px',
                  padding: '2px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }),
              }}
            />
          </div>
          <div className="edu">
            <h5>Select Your Institution</h5>
            <Select
              options={institutionOptions}
              placeholder="Select your institution"
              styles={{
                control: (base) => ({
                  ...base,
                  width: '300px',
                  padding: '2px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }),
              }}
            />
          </div>
          <div className="edu">
            <h5>Year Of Passing</h5>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              style={{ width: '300px', padding: '12px', border: '1px solid #ccc', borderRadius: '5px'}}
            />
          </div>
        </div>
      </div>
      <div className="performance">
        <div className="performanceone">
          <h3>Work Preference</h3>
        </div>
        <div className="performancetwo">
          <div className="perone">
            <h5>Title</h5>
            <input
              type="text"
              placeholder="Title for your job post"
              style={{ width: '300px', height: '45px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div className="pertwo">
            <h5>Experience</h5>
            <input
              type="text"
              placeholder="Enter your experience level"
              style={{ width: '300px', height: '45px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
          <div className="perthree">
            <h5>Languages</h5>
            <Select
              options={languageOptions}
              placeholder="Select languages you know"
              styles={{
                control: (base) => ({
                  ...base,
                  width: '300px',
                  padding: '3px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }),
              }}
            />
          </div>
          <div className="perfour">
            <h5>Hourly Rate</h5>
            <input
              type="text"
              placeholder="₹ Visible to the client"
              style={{ width: '300px', height: '45px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
      </div>
      <div className="resume">
        <div className="resumeone">
          <h3>Add Your Resume</h3>
          <p>This resume will be checked for fraudulence. Upload it with the right data to get verified. (Max size 2MB, formats PDF, PNG)</p>
        </div>
        <div className="resumetwo">
          <button onClick={handleResumeUpload}>
            <img src={vector} alt="plus" className="icon" />
            <span>Upload your resume</span>
          </button>
        </div>
      </div>
      <div className="mainbutton">
        <div className="arrow">
         <Link to="/step1"><button>
            <img src={back} alt="arrow" />
          </button></Link> 
        </div>
        <div className="next">
         <Link to="/bank"><button>Next</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Step2;
