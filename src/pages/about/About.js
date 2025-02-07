import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/About.scss';
import BgImage from '../../styles/assets/about.webp';
import about from '../../styles/assets/bgImage.webp';
import IMG1 from '../../styles/assets/gift.webp';

const images = [
    require('../../styles/assets/nm1.webp'),
    require('../../styles/assets/nm2.webp'),
    require('../../styles/assets/nm3.webp'),
    require('../../styles/assets/nm4.webp'),
    require('../../styles/assets/nm5.webp'),
    require('../../styles/assets/nm6.webp'),
    require('../../styles/assets/nm7.jpg'),
    require('../../styles/assets/nm8.jpg'),
    require('../../styles/assets/nm9.jpg'),
    require('../../styles/assets/nm10.jpg'),
    require('../../styles/assets/nm11.jpg')
];

function About() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="about-container">
            <div className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.5), rgba(255, 182, 193, 0.5)), url(${BgImage})` }}>
                <h1 style={{ color: '#fff', fontSize: '48px', fontWeight: '800' }}>About Us</h1>
            </div>

            <section className="hero1">
                <div className="hero-content1">
                    <div className="hero-image">
                        <img src={about} alt="Mainland Night Market" />
                    </div>
                    <div className="hero-text">
                        <h1>Themeland Night Market</h1>
                        <h2>Operating since 2020</h2>
                        <p className="description">This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and made this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and made this text yours.</p>
                        <button className="vendors-button" onClick={() => handleNavigate('/craft-vendors')}>See Our Vendors</button>
                    </div>
                </div>
            </section>

            <section className="gift-section">
                <div className="gift-content">
                    <div className="gift-text">
                        <h1>Find the Perfect Gift!</h1>
                        <h2>Handmade with Love</h2>
                        <p className="description">Discover unique, handcrafted gifts made with love. Whether you're shopping for a friend, family, or yourself, our vendors offer something special for everyone.</p>
                        <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer">
                            <button className="buy-tickets">Buy Tickets</button>
                        </a>
                    </div>
                    <div className="gift-image">
                        <img src={IMG1} alt="Gift Items" />
                    </div>
                </div>
            </section>

            <section className="follow-us">
                <div className="follow-us-content">
                    <h3>Follow Us <u>@ThemelandNM</u></h3>
                    <div className="image-gallery">
                        {images.map((image, index) => (
                            <div key={index} className="image-container">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
