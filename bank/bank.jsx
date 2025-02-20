import React, { useState } from 'react';
import './bank.css';
import pic from './pic.svg';
import bank from './bank.svg';
import { Link } from 'react-router-dom';
import OTPVerification from '../otp/otp';


const BankForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [isOtpOpen, setIsOtpOpen] = useState(false); // State for OTP modal
  const [isChecked, setIsChecked] = useState(false);

  // Handle Card Number Input (allow only digits and move to next input after length)
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setCardNumber(value);
    if (value.length === 16) {
      document.getElementById('expiry-date').focus(); // Move focus to expiry date when card number is filled
    }
  };

  // Handle CVC Input (only digits)
  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setCvc(value);
  };

  // Handle Card Holder Name Input (only alphabets)
  const handleCardHolderNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
    setCardHolderName(value);
  };

    // Handle Checkbox Change
    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
    };

// Open OTP modal when "Add card" is clicked
const handleAddCard = () => {
  if (isChecked) {
    setIsOtpOpen(true);
  } else {
    // Display an interim symbol to the user
    alert("Please agree to the terms and conditions");
  }
};

 

  return (
    <>
      <div className="containerRightBankForm">
        <div className="formContainerBankForm">
          <div className="wholeBankForm">
            <div className="topBankForm">
              <h3>Step 3 of 4: Add a bank account</h3>
            </div>
            <div className="containerBankForm">
              <div className="cddetailsBankForm">
                <h3>Add credit or debit</h3>
              </div>

              <div className="cardDetailsBankForm">
                <div className="cardnoBankForm">
                  <h4>Card number</h4>
                  <input
                    type="text"
                    value={cardNumber}
                    maxLength="16"
                    placeholder="Enter your card number"
                    onChange={handleCardNumberChange}
                  />
                </div>

                <div className="excvcBankForm">
                  <div className="exdateBankForm">
                    <h4>Expiry date</h4>
                    <input
                      type="date"
                      id="expiry-date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="cvcdetailsBankForm">
                    <h4>CVC</h4>
                    <input
                      type="text"
                      value={cvc}
                      maxLength="3"
                      placeholder="Enter CVC code"
                      onChange={handleCvcChange}
                    />
                  </div>
                </div>

                <div className="chnameBankForm">
                  <h4>Card holder name</h4>
                  <input
                    type="text"
                    value={cardHolderName}
                    placeholder="Enter the name on the card"
                    onChange={handleCardHolderNameChange}
                  />
                </div>
              </div>

              <div className="checkBankForm">
                <input type="checkbox" onChange={handleCheckboxChange} />
                <p>I agree with terms & conditions</p>
              </div>

              <div className="buttonsBankForm">
                <div className="superBankForm">
                   <Link to ="/step2"> <button>
                    <img src={pic} alt="Icon" />
                  </button></Link>
                </div>
                <div className="niceBankForm">
                  <button onClick={handleAddCard}>Add card</button> {/* Trigger OTP */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="textImageContainerBankForm">
          <div className="container1rightBankForm">
            <div className="textContentBankForm">
              Verify your card to get started<br /> into the world of freelancing
            </div>
          </div>
          <div className="container2rightBankForm">
            <img src={bank} alt="Freelancing" className="imageContentBankForm" />
          </div>
        </div>
      </div>

      {/* Render the OTPVerification component */}
      {isOtpOpen && <OTPVerification setIsOtpOpen={setIsOtpOpen} />}
    </>
  );
};

export default BankForm;
