import React from 'react';
import '../../styles/Home.scss';
import Img1 from '../../styles/assets/img1.webp';
import Img2 from '../../styles/assets/img2.webp';
import Img3 from '../../styles/assets/img3.webp';
import BgImage from '../../styles/assets/bgImage.webp';

function Home() {
    return (
        <div className="home-container">
            <div className="hero-section" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="hero-content">
                    <h1>Mainland Night Market</h1>
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

            <div className="become-vendor row">
                <div className='col-md-6 col-sm-12'>
                    <h1 className="become-vendor-heading">Become A Vendor</h1>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <p className="become-vendor-text">
                        Apply to be part of our next event! This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.
                    </p>
                    <button className="apply-now-button">Apply Now</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
