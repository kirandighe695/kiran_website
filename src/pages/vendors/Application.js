import React, { useState } from 'react';
import Image from '../../styles/assets/application.webp';
import emailjs from 'emailjs-com';
import '../../styles/Application.scss';

function Application() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        specialRequests: "",
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_5j0tc5y',
            'template_98xj7zk',
            formData,
            'p23g0Tg0dfL-1f5yj'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setResponseMessage('Email sent successfully!');
                setIsSuccess(true);
                setFormData({ firstName: '', lastName: '', email: '', comments: '', specialRequests: '' });
            })
            .catch((error) => {
                console.log('FAILED...', error);
                setResponseMessage('Error sending email. Please try again.');
                setIsSuccess(false);
            });

        setTimeout(() => {
            setResponseMessage('');
        }, 3000);
    };

    return (
        <div className="application-container">
            <div className="application-section" style={{ backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.5), rgba(255, 182, 193, 0.5)), url(${Image})` }}>
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

                    {responseMessage && (
                        <div className={isSuccess ? 'success-message' : 'error-message'}>
                            {responseMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Application;
