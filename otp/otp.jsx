import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './otp.css'

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const navigate = useNavigate(); // Initialize the navigate hook
  const [isOpen, setIsOpen] = useState(false); // Add a state to track the modal open state

  // Handle OTP input and move focus to the next input
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (element.value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    // If backspace is pressed and field is empty, move focus to previous input
    if (!element.value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Function to handle OTP confirmation
  const handleConfirm = () => {
    const enteredOtp = otp.join('');
    
    if (enteredOtp.length === 4) {
      // Assuming OTP is correct for now, you can validate the OTP here if needed
      navigate('/step4'); // Navigate to Step 4 after OTP is confirmed
    } else {
      alert('Please enter a valid 4-digit OTP.');
    }
  };

  // Function to handle close button click
  const handleClose = () => {
    setIsOpen(false);
    navigate('/bank'); // Navigate to Step 3 (previous step)
  };

  return (
    <>
      <button className="otp-open-button" onClick={() => setIsOpen(true)}>Open OTP Verification</button>

      {isOpen && (
        <div className="otp-modal-background">
          <div className="otp-container">
            <button className="otp-close-button" onClick={handleClose}>X</button>
            <h3 className="otp-title">OTP Verification</h3>
            <h4 className="otp-subtitle">Enter the 4 digit code</h4>
            <div className="otp-input-container">
              {otp.map((data, index) => (
                <input
                  className="otp-input"
                  type="text"
                  maxLength="1"
                  key={index}
                  id={`otp-input-${index}`}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && otp[index] === '') {
                      document.getElementById(`otp-input-${index - 1}`)?.focus();
                    }
                  }}
                  inputMode="numeric"
                />
              ))}
            </div>
            {/* Confirm Button */}
            <button className="otp-button" onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      )}
    </>
  );
};

export default OTPVerification;