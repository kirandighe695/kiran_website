import React, { useState } from 'react';
import '../../styles/Header.scss';
import { FaFacebookF, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../styles/assets/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Mainland" />
            </div>
            <div className="nav-links">
                <nav>
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Vendors</a>
                            <ul className="dropdown-content">
                                <li><a href="#">Craft Vendors</a></li>
                                <li><a href="#">Food Vendors</a></li>
                                <li><a href="#">Applications</a></li>
                            </ul>
                        </li>
                        <li><a href="/event">Events</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <div className="buy-tickets-container">
                            <a href="#" className="buy-tickets-button">Buy Tickets</a>
                        </div>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/your-page"
                                target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/your-profile"
                                target="_blank" rel="noopener noreferrer" className='mx-3'><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/your-profile"
                                target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </ul>

                </nav>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`drawer ${menuOpen ? 'active' : ''}`}>
                <nav className="drawer-nav">
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Vendors</a>
                            <ul className="dropdown-content">
                                <li><a href="#">Craft Vendors</a></li>
                                <li><a href="#">Food Vendors</a></li>
                                <li><a href="#">Applications</a></li>
                            </ul>
                        </li>
                        <li><a href="/event">Events</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <div className="buy-tickets-container">
                        <a href="#" className="buy-tickets-button">Buy Tickets</a>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/your-page"
                            target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/your-profile"
                            target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/your-profile"
                            target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </nav>
            </div>
            {menuOpen && <div className="drawer-overlay" onClick={toggleMenu}></div>}
        </header>
    );
}

export default Header;
