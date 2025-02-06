import React from 'react';
import Image from '../../styles/assets/application.webp';
import '../../styles/Application.scss';

function Application() {
    return (
        <div className="application-container">
            <div className="application-section" style={{ backgroundImage: `url(${Image})` }}>
                <h1>Vendor Applications</h1>
                <p>For Craft & Food Vendors, please provide the following information to register for our next event.</p>
            </div>
        </div>
    )
}

export default Application;
