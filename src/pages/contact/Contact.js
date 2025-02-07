import React, { useState, useRef, useEffect } from 'react';
import '../../styles/Contact.scss';
import Map from '../../styles/assets/map.png';
import contact from '../../styles/assets/contact.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    };

    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });
    const mapRef = useRef(null);

    const markers = [
        { x: 160, y: 210, label: "Canada Place" },
        { x: 410, y: 360, label: "Gastown" },
    ];

    const handleMarkerHover = (marker) => {
        setTooltip({
            visible: true,
            x: marker.x + mapRef.current.offsetLeft + 10,
            y: marker.y + mapRef.current.offsetTop + 10,
            text: marker.label,
        });
    };

    const handleMarkerMouseOut = () => {
        setTooltip({ ...tooltip, visible: false });
    };

    useEffect(() => {
        if (mapRef.current) {
            console.log("Map container offsetLeft:", mapRef.current.offsetLeft);
            console.log("Map container offsetTop:", mapRef.current.offsetTop);
        }
    }, []);

    return (
        <div className="contact-container">
            <div className='contact' style={{ backgroundImage: `url(${contact})` }}>
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
                </form>
            </div>

            <div className="map-container" ref={mapRef}>
                <img src={Map} alt="Static Map" useMap="#map" className='img' />
                <map name="map">
                    {markers.map((marker, index) => (
                        <area
                            key={index}
                            shape="rect"
                            coords={`${marker.x},${marker.y},${marker.x + 50},${marker.y + 50}`}
                            href="#"
                            alt={marker.label}
                            className="marker"
                            onMouseOver={() => handleMarkerHover(marker)}
                            onMouseOut={handleMarkerMouseOut}
                        />
                    ))}
                </map>

                {tooltip.visible && (
                    <div
                        className="tooltip"
                        style={{ left: tooltip.x, top: tooltip.y }}>
                        {tooltip.text}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact;
