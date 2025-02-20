import React from 'react';
import './signin.css';
import googleIcon from './google.svg';
import appleIcon from './apple.svg';
import decorativeShape from './group.svg';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="signin-wrapper">
      <div className="signin-content">
        
        <div className="form-section">
          <div className="form-header">Sign in</div>

          <div className="form-body">
            <div className="input-group-signin">
              <label htmlFor="email" className="input-label">Email Address</label>
              <input type="email" id="email" className="input-field-signin" placeholder="abc@example.com" />
            </div>

            <div className="input-group-signin">
              <label htmlFor="password" className="input-label">Password</label>
              <input type="password" id="password" className="input-field-signin-password" placeholder="Password" />
            </div>

           

          <div className="submit-button-wrapper">
            <Link to ="designation"><button className="submit-button">Login</button></Link>
          </div>

          <div className="divider">
              <hr />
              <div className="divider-text">Or Sign up with</div>
              <hr />  
            </div>

            <div className="social-buttons">
              <button className="social-button google-button">
                <img src={googleIcon} alt="Google" />
                <span className="social-button-text">Google</span>
              </button>
              <button className="social-button apple-button">
                <img src={appleIcon} alt="Apple" />
                <span className="social-button-text">Apple</span>
              </button>
            </div>
          </div>

          <div className="signin-link-wrapper">
            <p className="signin-text">Don't have an account? 
              <Link to="/signup" className="signin-link">Sign up</Link>
            </p>
          </div>
        </div>

        {/* Right Side - Quote Section */}
        <div className="quote-section">
          <div className="quote-text">
            <p className="quote">“ The secret of getting</p>
            <p className="quote">ahead is getting started ”</p>
            <p className="subheading">Spare a minute to kickstart your career</p>
          </div>
          <div className="shape-wrapper">
            <img src={decorativeShape} alt="Decorative Shape" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;