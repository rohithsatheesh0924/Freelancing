import React from 'react';
import './dashboard.css'; // Assuming the CSS is saved in Rohit.css
import dash from "./dashboard.svg";
import prof from "./proflogo.svg";
import comm from "./commlogo.svg";
import job from "./joblogo.svg";
import setting from "./settingslogo.svg";
import logout from "./logoutlogo.svg";
import rightone from "./rightone.svg";
import righttwo from "./right3.svg";
import rightthree from "./rightup3.svg";
import rightfour from "./rightup4.svg";
import user from "./logs.svg";
const Dashboard = () => {
  return (
    <div className="whole-page">
      <div className="side-nav">
        <div className="rohit-nav">
          <div className="logo">
            <h1>HSquare</h1>
          </div>
          <div className="buttons">
            <button><img src= {dash}alt="Dashboard" /> Dashboard</button>
            <button><img src={prof} alt="Profile" />Profile</button>
            <button><img src={comm} alt="Community" />Community</button>
            <button><img src={job} alt="Jobs" />Jobs</button>
            <button><img src={setting} alt="Proposal" />Proposal</button>
            <button><img src={logout} alt="Logout" />Logout</button>
          </div>
        </div>
      </div>
      <div className="rightwhole">
        <div className="uppername">
          <div className="name">
            <h1>My Dashboard</h1>
            <hr />
          </div>
        </div>
        <div className="bigcontainer">
          <div className="container">
            <div className="nothing-cont">
              <div className="rightdown rightdownup-box">
                <div className="rightdownup">
                  <div className="rightdownone">
                    <div className="title">On Going Gig Works</div>
                    <div className="number">08</div>
                  </div>
                  <div className="icon-container">
                    <div className="icon-box">
                      <img src={rightone} alt="Gig Works Icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightdown rightdowthree-box">
                <div className="rightdownup">
                  <div className="rightdownone">
                    <div className="title">Completed Gig Works</div>
                    <div className="number">05</div>
                  </div>
                  <div className="icon-container">
                    <div className="icon-box">
                      <img src={righttwo} alt="Completed Gig Works Icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightdown rightdowntwo-box">
                <div className="rightdowntwo">
                  <div className="content">
                    <div className="title">On going Job Works</div>
                    <div className="number">08</div>
                  </div>
                  <div className="icon-container">
                    <div className="icon-box">
                      <img src={rightthree} alt="Ongoing Job Works Icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightdown rightdownfour-box">
                <div className="rightdowntwo">
                  <div className="content">
                    <div className="title">Completed Job Works</div>
                    <div className="number">03</div>
                  </div>
                  <div className="icon-container">
                    <div className="icon-box">
                      <img src={rightfour} alt="Completed Job Works Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nothing">
              <h1>Table</h1>
              <table>
                <thead>
                  <tr>
                    <th>s.no</th>
                    <th>freelancer name</th>
                    <th>role</th>
                    <th>duration</th>
                    <th>cost</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows would go here */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="container2">
            <div className="container-content">
              <div className="container-section">
                <div className="header">
                  <div className="header-content">
                    <img src={user} alt="Available Freelancer" />
                    <div className="header-text">Available Freelancer</div>
                  </div>
                </div>
                <button className="freelancer-button">
                  <div className="freelancer-text">Alvin</div>
                  <div className="role-text">web designer</div>
                </button>
                <button className="freelancer-button">
                  <div className="freelancer-text">Sam</div>
                  <div className="role-text">web designer</div>
                </button>
                <button className="freelancer-button">
                  <div className="freelancer-text">Logesh</div>
                  <div className="role-text">web designer</div>
                </button>
                <button className="freelancer-button">
                  <div className="freelancer-text">Karthik</div>
                  <div className="role-text">web designer</div>
                </button>
                <button className="freelancer-button">
                  <div className="freelancer-text">Raja</div>
                  <div className="role-text">web designer</div>
                </button>
              </div>
            </div>
            <div className="right_right">
              <div className="right_down_right">
                <div className="message_box">
                  <div className="message_content">
                    <img src="user.svg" alt="Message" />
                    <div className="message_text">Message</div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_item">
                    <div className="chat_content">
                      <div className="chat_name">Rahul</div>
                      <div className="chat_message">Hello</div>
                    </div>
                  </div>
                  <div className="chat_item">
                    <div className="chat_content">
                      <div className="chat_name">Pavar</div>
                      <div className="chat_message">Vijay kumar ....</div>
                    </div>
                  </div>
                  <div className="chat_item">
                    <div className="chat_content">
                      <div className="chat_name">Sanjeev</div>
                      <div className="chat_message">Whatsup?</div>
                    </div>
                  </div>
                  <div className="chat_item">
                    <div className="chat_content">
                      <div className="chat_name">Rakshitha</div>
                      <div className="chat_message">dataset missing</div>
                    </div>
                  </div>
                  <div className="chat_item">
                    <div className="chat_content">
                      <div className="chat_name">Pravin</div>
                      <div className="chat_message">Deadline please?</div>
                    </div>
                  </div>
                  <div className="chat_item">
                    <div className="chat_content">
                      <div className="chat_name">Rohith</div>
                      <div className="chat_message">sathish.....</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
