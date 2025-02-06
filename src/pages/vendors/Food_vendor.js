import React from 'react';
import BgFood from '../../styles/assets/BgFood.webp';
import SubFooter from '../../components/sub_footer/SubFooter';
import '../../styles/Vendor.scss';

const images = [
    require('../../styles/assets/food1.webp'),
    require('../../styles/assets/food2.webp'),
    require('../../styles/assets/food3.webp'),
    require('../../styles/assets/food4.webp'),
    require('../../styles/assets/food5.webp'),
    require('../../styles/assets/food6.webp')
];

function Food_vendor() {
    const vendors = [
        { name: 'Breadbowl', local: 'Vegan & Gluten-Free Eatery', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Harvest', local: 'Catering Company', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Mellon', local: 'Brunch Eatery', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Pomme & Grenadine', local: 'French cuisine', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Milk & Flour', local: 'French Bakery', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Hibachi Japanese', local: 'Japanese cuisine', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Anise', local: 'French cuisine', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Root & Stem', local: 'Vegan & Gluten-Free Eatery', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Drift Coffee Bar', local: 'Micro Coffee Roastery', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
    ];

    return (
        <div className="craft-container">
            <div className="craft-section" style={{ backgroundImage: `url(${BgFood})` }}>
                <h1>Food Trucks</h1>
            </div>

            <div className="vendor-bg">
                <div className="vendor-list">
                    {vendors.map((vendor, index) => (
                        <div className="vendor-item py-2" key={index}>
                            <h4>{vendor.name}</h4>
                            <p>{vendor.local}</p>
                            <a href={vendor.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                            <a href={vendor.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    ))}
                </div>

                <div className="gallery-container">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <SubFooter />
        </div>
    );
}

export default Food_vendor;
