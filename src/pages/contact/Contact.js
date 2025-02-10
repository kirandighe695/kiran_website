import React, { useState, useRef, useEffect } from 'react';
import '../../styles/Contact.scss';
import emailjs from 'emailjs-com';
import contact from '../../styles/assets/contact.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
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

    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            console.log("Map container offsetLeft:", mapRef.current.offsetLeft);
            console.log("Map container offsetTop:", mapRef.current.offsetTop);
        }
    }, []);

    return (
        <div className="contact-container">
            <div className='contact' style={{ backgroundImage: `linear-gradient(rgba(248, 162, 175, 0.5), rgba(255, 182, 193, 0.5)), url(${contact})` }}>
                <h2 className="contact-heading">Contact Us</h2>
            </div>

            <div className='mt-5'>
                <div className="contact-info">888 Griffiths Way, Themeland ML 12345</div>
                <div className="contact-info">Tel: (987) 654-3210</div>
                <div className="contact-info">Email: kirandighe1945@gmail.com</div>
                <div className="contact-info mt-5">Open Hours:</div>
                <div className="contact-info">Monday-Friday: 9:00AM-7:00PM</div>
                <div className="contact-info">Saturday: 10:30AM-8:00PM</div>
                <div className="contact-info">Sunday: Closed</div>
            </div>

            <div className="form-container mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="name-inputs">
                        <div className="input-group">
                            <label htmlFor="firstName">First Name*</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="lastName">Last Name*</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message*</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className='button1'>Submit</button>

                    {responseMessage && (
                        <div className={isSuccess ? 'success-message' : 'error-message'}>
                            {responseMessage}
                        </div>
                    )}
                </form>
            </div>

            <div className="map-container" ref={mapRef}>
                <iframe
                    title="Google Maps - Custom Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.123456789!2d74.286931!3d19.561386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTkuNTYxMzg2LCA3NC4yODY5MzE!5e0!3m2!1sen!2sin!4v1694099876543!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact;
