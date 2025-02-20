import React, { useRef } from 'react';
import './home.css'; // Ensure the CSS file matches this name
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import bell from './bell icon.svg';
import frame1 from './Frame 1000004025.svg';
import frame2 from './Frame 1000004036.svg';
import hero1 from './hero contnaienr (1).svg';

const App = () => {
  const searchInputRef = useRef(null);

  const handleSearchIconClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Focus on the search input when clicking the icon
    }
  };

  return (
    <div>
      <header>
        <div className="header-left">
          <img src="logo.svg" alt="Logo" className="logo" />
          <nav className="navigation">
            <a href="#">Explore</a>
            <a href="#">My Projects</a>
            <a href="#">Orders</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="user-info">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for services"
                ref={searchInputRef}
              />
              <button className="search-button" onClick={handleSearchIconClick}>
                <FaSearch />
              </button>
            </div>
            <FaBell className="icon" />
            <FaEnvelope className="icon" />
            <FaUserCircle className="avatar" />
          </div>
        </div>
      </header>

      <section className="trending">
        <h2>Trending Freelancers</h2>
        <div className="freelancers">
          <div className="freelancer-card">
            <img src="pci.svg" alt="Freelancer" />
            <div className="freelancer-info">
              <h3>Paramesh V</h3>
              <p>⭐ 4.9 (11)</p>
              <p>I will design a unique website for your business</p>
              <p>Starts from ₹1999</p>
              <button>View</button>
            </div>
          </div>
          {/* Repeat Freelancer Cards */}
        </div>
      </section>

      <section className="categories">
        <h2>Trending Categories</h2>
        <div className="categories-container">
          <div className="category-card">
            <img src="hero-container.svg" alt="pic" />
            <h3>Web Development</h3>
            <p>The main role is to develop a unique website.</p>
          </div>
          {/* Repeat Category Cards */}
        </div>
      </section>
    </div>
  );
};

export default App;
