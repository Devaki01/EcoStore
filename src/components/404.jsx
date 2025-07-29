import React from 'react';
import './HomePage.css';
import profile from '../assets/bussiness-man.png';
import logo from '../assets/eco_logo.png';

const Error = () => {
    return (
        <>
            <div className="home-page-container">
                <nav className="navbar">
                    <div className="logo"><img src={logo} alt="logo" className="logo" /> </div>
                    <ul className="nav-links">
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/carbono">CARBONO</a></li>
                        <li><a href="/shop">SHOP</a></li>
                        <li><a href="/values">VALUES</a></li>
                        <li><a href="/support">SUPPORT</a></li>
                    </ul>
                    <div> <img src={profile} alt="user" className="profile-icon" /> </div>
                </nav>

                <div className="hero-section">
                    <p className="hero-headline">
                        Error<br/>404 Page Not Found
                    </p>
                    <button className="get-started-button"><a href="/">BACK TO HOME</a></button>
                </div>

            </div>
        </>

    );


};

export default Error;