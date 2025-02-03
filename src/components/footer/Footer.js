import React from 'react';
import '../../styles/Footer.scss';
import logo from '../../styles/assets/logo1.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 footer-logo">
                        <img src={logo} alt="Your Logo" />
                    </div>
                    <div className="col-md-6 col-sm-12 footer-contact">
                        <p>
                            <FaMapMarkerAlt /> Kolhewadi, Sangamner, Ahilyanagar
                        </p>
                        <p>
                            <FaEnvelope /> <a href="mailto:kirandighe2004@gmail.com">kirandighe2004@gmail.com</a>
                        </p>
                        <p>
                            <FaPhoneAlt /> +91 9860561254
                        </p>
                    </div>
                </div>

                <div className="row justify-content-between mt-4">
                    <div className="col-md-6 footer-copyright">
                        <p>&copy; 2025 Kiran Dighe. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 footer-social">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/your-page"
                                target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/your-profile"
                                target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/your-profile"
                                target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 footer-credits">
                        <p>Website Created & Hosted By Kiran Dighe</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
