import React, { useState, useEffect } from 'react';
import './signup.css';
import google from './google.svg';
import apple from './apple.svg';
import group from './group.svg';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordCondition, setConfirmPasswordCondition] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password

  // Email Handler
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Password Handler
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  // Confirm Password Handler
  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (password !== confirmPasswordValue) {
      setConfirmPasswordCondition('Passwords must match');
    } else {
      setConfirmPasswordCondition('');
    }
  };

  // Terms Checkbox Handler
  const handleTermsChange = (e) => {
    setTerms(e.target.checked);
  };

  // Password Validation Logic
  const validatePassword = (password) => {
    let error = null;
    if (password.length < 8) {
      error = 'Password must be at least 8 characters long';
    } else if (!/[a-z]/.test(password)) {
      error = 'Password must contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(password)) {
      error = 'Password must contain at least one uppercase letter';
    } else if (!/[0-9]/.test(password)) {
      error = 'Password must contain at least one number';
    } else if (!/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(password)) {
      error = 'Password must contain at least one special character';
    }
    setPasswordError(error);
  };

  // Check Password Match and Show Icons
  const checkPasswordMatch = () => {
    const passwordMatch = password === confirmPassword;
    setConfirmPasswordCondition(passwordMatch ? '' : 'Passwords must match');
  };

  useEffect(() => {
    checkPasswordMatch(); // Run on component mount or when passwords change
  }, [password, confirmPassword]);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordConditions = [
      {
        condition: password.length >= 8,
        error: 'Password should be at least 8 characters long.',
      },
      {
        condition: /\d/.test(password),
        error: 'Password should contain at least one digit.',
      },
      {
        condition: /[A-Z]/.test(password),
        error: 'Password should contain at least one uppercase letter.',
      },
      {
        condition: password === confirmPassword,
        error: 'Confirmation password does not match the password.',
      },
    ];

    const errors = passwordConditions.filter((condition) => !condition.condition);
    if (errors.length > 0) {
      setPasswordError(errors[0].error);
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }

    if (email && password && confirmPassword && terms && passwordValid) {
      if (password === confirmPassword && !passwordError) {
        // Proceed to next step or action
        window.location.href = '/designation';
      } else if (passwordError) {
        alert(passwordError);
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Please fill in all the fields and agree to the terms and conditions');
    }
  };

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="whole-signup">
      <div className="const-signup">
        {/* Left Side - Sign Up Form */}
        <div className="container1-signup">
          <div className="header-text-signup">Sign Up</div>

          <div className="form-container-signup">
            <div className="input-container-signup">
              <label htmlFor="email" className="input-label-signup">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="input-field-signup" 
                placeholder="abc@example.com" 
                value={email} 
                onChange={handleEmailChange} 
              />
            </div>

            {/* Password Field with Eye Icon */}
            <div className="input-container-signup">
              <label htmlFor="password" className="input-label-signup">Password</label>
              <div className="password-container-signup">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  className="input-field-signup-password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>

            {/* Confirm Password Field with Eye Icon */}
            <div className="input-container-signup">
              <label htmlFor="confirm-password" className="input-label-signup">Confirm Password</label>
              <div className="password-container-signup">
                <input 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  id="confirm-password" 
                  className="input-field-signup-password" 
                  placeholder="Confirm your password" 
                  value={confirmPassword} 
                  onChange={handleConfirmPasswordChange} 
                />
                <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {confirmPasswordCondition && <p style={{ color: 'red' }}>{confirmPasswordCondition}</p>}
              
              <div className="password-icon">
                {password === confirmPassword && password ? (
                  <FaCheckCircle color="green" size={24} />
                ) : (
                  confirmPassword && <FaTimesCircle color="red" size={24} />
                )}
              </div>
            </div>

            <div className="terms-container-signup">
              <input 
                type="checkbox" 
                id="terms" 
                className="checkbox-signup" 
                checked={terms} 
                onChange={handleTermsChange} 
              />
              <label htmlFor="terms" className="terms-text-signup">I agree with terms & conditions</label>
            </div>

            <div className="submit-button-container-signup">
              <button className="submit-button-signup" onClick={handleSubmit}>Sign Up</button>
            </div>

            <div className="divider-container-signup">
              <hr />
              <div className="divider-text-signup">Or Sign up with</div>
              <hr />
            </div>

            <div className="social-buttons-container-signup">
              <button className="social-button-signup">
                <img src={google} alt="Google" className="social-icon-signup" />
                Sign up with Google
              </button>
              <button className="social-button-signup">
                <img src={apple} alt="Apple" className="social-icon-signup" />
                Sign up with Apple
              </button>
            </div>
          </div>

          <div className="login-text-container-signup">
            <p>Already have an account? <Link to="/login" className="login-link-signup">Log in</Link></p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="container2-signup">
          <img src={group} alt="Group" className="group-image-signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
