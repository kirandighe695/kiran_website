import React from 'react';
import BgCraft from '../../styles/assets/craftbg.webp';
import '../../styles/Vendor.scss';
import SubFooter from '../../components/sub_footer/SubFooter';

const images = [
    require('../../styles/assets/craft1.webp'),
    require('../../styles/assets/craft2.webp'),
    require('../../styles/assets/craft3.webp'),
    require('../../styles/assets/craft4.webp'),
    require('../../styles/assets/img1.webp'),
    require('../../styles/assets/nm1.webp')
];

function CraftVendor() {
    const vendors = [
        { name: 'Madelyn Yang', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Cooke Crafts', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Lowell Murray', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Emily Williams', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Wolfe Designs', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Clementine Jewelry', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Lee Woodworking', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Figueroa Chocolates', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
        { name: 'Violet Pham', website: 'https://yoursite.com/', instagram: 'https://www.instagram.com/' },
    ];

    return (
        <div className="craft-container">
            <div className="craft-section" style={{ backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.5), rgba(255, 182, 193, 0.5)), url(${BgCraft})` }}>
                <h1>Vendors</h1>
            </div>

            <div className="vendor-bg">
                <div className="vendor-list">
                    {vendors.map((vendor, index) => (
                        <div className="vendor-item py-2" key={index}>
                            <h4>{vendor.name}</h4>
                            <p>Local Vendor</p>
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

export default CraftVendor;
