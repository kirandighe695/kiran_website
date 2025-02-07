import React, { useState, useEffect } from 'react';
import '../../styles/Footer.scss';
import logo from '../../styles/assets/logo1.png';
import Sign from '../../styles/assets/sign.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                        <p>Website Created & Hosted By</p>
                        <img src={Sign} alt="sign" className='sign'/>
                    </div>
                </div>

                {showScroll && (
                    <button className="scroll-to-top" onClick={scrollToTop}>
                        <FaArrowUp />
                    </button>
                )}
            </div>
        </footer>
    );
};

export default Footer;
