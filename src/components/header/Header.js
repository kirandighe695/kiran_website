import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Header.scss';
import { FaFacebookF, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../styles/assets/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isActive = (path) => location.pathname === path ? 'active-link' : '';

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Mainland" />
            </div>

            <div className="nav-links">
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link
                                to="/"
                                className={isActive('/')}
                                onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className={isActive('/about')}
                                onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>

                        <li className="dropdown">
                            <span className={`dropbtn ${isActive('/craft-vendors') || isActive('/food-vendors') || isActive('/applications') ? 'active-link' : ''}`}>Vendors</span>
                            <ul className="dropdown-content">
                                <li>
                                    <Link
                                        to="/craft-vendors"
                                        className={isActive('/craft-vendors')}
                                        onClick={() => setMenuOpen(false)}>
                                        Craft Vendors
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/food-vendors"
                                        className={isActive('/food-vendors')}
                                        onClick={() => setMenuOpen(false)}>
                                        Food Vendors
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/applications"
                                        className={isActive('/applications')}
                                        onClick={() => setMenuOpen(false)}>
                                        Applications
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link
                                to="/event"
                                className={isActive('/event')}
                                onClick={() => setMenuOpen(false)}>
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className={isActive('/contact')}
                                onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>

                        <div className="buy-tickets-container">
                            <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer">
                                <button className="buy-tickets-button">Buy Tickets</button>
                            </a>
                        </div>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className='mx-3'><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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
                        <li>
                            <Link
                                to="/"
                                className={isActive('/')}
                                onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className={isActive('/about')}
                                onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>

                        <li className="dropdown">
                            <span className={`dropbtn ${isActive('/craft-vendors') || isActive('/food-vendors') || isActive('/applications') ? 'active-link' : ''}`}>Vendors</span>
                            <ul className="dropdown-content">
                                <li>
                                    <Link
                                        to="/craft-vendors"
                                        className={isActive('/craft-vendors')}
                                        onClick={() => setMenuOpen(false)}>
                                        Craft Vendors
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/food-vendors"
                                        className={isActive('/food-vendors')}
                                        onClick={() => setMenuOpen(false)}>
                                        Food Vendors
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/applications"
                                        className={isActive('/applications')}
                                        onClick={() => setMenuOpen(false)}>
                                        Applications
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link
                                to="/event"
                                className={isActive('/event')}
                                onClick={() => setMenuOpen(false)}>
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className={isActive('/contact')}
                                onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="buy-tickets-container">
                        <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer">
                            <button className="buy-tickets-button">Buy Tickets</button>
                        </a>
                    </div>

                    <div className="social-icons">
                        <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </nav>
            </div>
            {menuOpen && <div className="drawer-overlay" onClick={toggleMenu}></div>}
        </header>
    );
}

export default Header;
