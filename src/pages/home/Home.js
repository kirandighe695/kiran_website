import React from 'react';
import '../../styles/Home.scss';
import Img1 from '../../styles/assets/img1.webp';
import Img2 from '../../styles/assets/img2.webp';
import Img3 from '../../styles/assets/img3.webp';
import BgImage from '../../styles/assets/bgImage.webp';
import SubFooter from '../../components/sub_footer/SubFooter';

function Home() {
    return (
        <div className="home-container">
            <div className="hero-section" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="hero-content">
                    <h1>Themeland Night</h1>
                    <p>Open Every Weekend from March 1 to 31, 2025</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Get Tickets</button>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="market-section">
                <h1>A Local Craft Market</h1>
                <p>Explore the finest local crafts and specialty items in Maryland.</p>

                <div className="market-cards">
                    <div className="card">
                        <img src={Img1} alt="Vendors" />
                        <h3>500+ Vendors</h3>
                        <p>Discover a variety of unique items from local artisans and entrepreneurs.</p>
                        <button className="learn">Learn More</button>
                    </div>

                    <div className="card">
                        <img src={Img2} alt="Local Food Trucks" />
                        <h3>Local Food Trucks</h3>
                        <p>Savor meals and snacks from our diverse selection of local food trucks.</p>
                        <button className="learn">Learn More</button>
                    </div>

                    <div className="card">
                        <img src={Img3} alt="Events Schedule" />
                        <h3>Events Schedule</h3>
                        <p>Enjoy performances and live entertainment during the event.</p>
                        <button className="learn">Learn More</button>
                    </div>
                </div>
            </div>

            < SubFooter />
        </div>
    );
}

export default Home;
