import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.scss';
import Img1 from '../../styles/assets/img1.webp';
import Img2 from '../../styles/assets/img2.webp';
import Img3 from '../../styles/assets/img3.webp';
import BgImage from '../../styles/assets/bgImage.webp';
import SubFooter from '../../components/sub_footer/SubFooter';

function Home() {
    const navigate = useNavigate();
    const marketSectionRef = useRef(null);

    const handleScrollToMarket = () => {
        marketSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="home-container">
            <div className="hero-section" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="hero-content">
                    <h1>Themeland Night</h1>
                    <p>Open Every Weekend from March 1 to 31, 2025</p>
                    <div className="hero-buttons">
                        <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary">Get Tickets</button>
                        </a>
                        <p>
                            <button className="btn-secondary" onClick={handleScrollToMarket}>Learn More</button>
                        </p>
                    </div>
                </div>
            </div>

            <div ref={marketSectionRef} className="market-section">
                <h1>A Local Craft Market</h1>
                <p>Explore the finest local crafts and specialty items in Maryland.</p>

                <div className="market-cards">
                    <div className="card">
                        <img src={Img1} alt="Vendors" />
                        <h3>500+ Vendors</h3>
                        <p>Discover a variety of unique items from local artisans and entrepreneurs.</p>
                        <button className="learn" onClick={() => handleNavigate('/craft-vendors')}>Learn More</button>
                    </div>

                    <div className="card">
                        <img src={Img2} alt="Local Food Trucks" />
                        <h3>Local Food Trucks</h3>
                        <p>Savor meals and snacks from our diverse selection of local food trucks.</p>
                        <button className="learn" onClick={() => handleNavigate('/food-vendors')}>Learn More</button>
                    </div>

                    <div className="card">
                        <img src={Img3} alt="Events Schedule" />
                        <h3>Events Schedule</h3>
                        <p>Enjoy performances and live entertainment during the event.</p>
                        <button className="learn" onClick={() => handleNavigate('/Event')}>Learn More</button>
                    </div>
                </div>
            </div>

            < SubFooter />
        </div>
    );
}

export default Home;
