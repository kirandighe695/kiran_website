import React, { useState } from 'react';
import Image from '../../styles/assets/application.webp';
import '../../styles/Application.scss';

function Application() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        specialRequests: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="application-container">
            <div className="application-section" style={{ backgroundImage: `url(${Image})` }}>
                <h1>Vendor Applications</h1>
                <p>For Craft & Food Vendors, please provide the following information to register for our next event.</p>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label>First Name*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Comments and/or Questions</label>
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Any special requests?</label>
                        <textarea
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='text-center'>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Application;
