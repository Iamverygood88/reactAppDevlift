import React from 'react';
import navIcon from './nav-btn.png';


class Navigation extends React.Component {
    render() {
      return (
        <div className="header-info">
        <nav className="main-nav">
            <h2 className="hidden">Navigation for Travel page</h2>
            <div className="nav-image">
                <img src={navIcon} alt="navigation"  />
            </div>
            <ul>
                <li><a className="nav-link">Home</a></li>
                <li><a className="nav-link">About Us</a></li>
                <li><a className="nav-link">Travel</a></li>
                <li><a className="nav-link">Schedule</a></li>
                <li><a className="nav-link">Contact Us</a></li>
            </ul>
         </nav>
         <div className="login-sign-btn">
         <button className="btn-login">Login</button>
         <button className="btn-sign-up">Sign Up</button>
         </div>
         </div>
      )
    }
  }


export default Navigation;