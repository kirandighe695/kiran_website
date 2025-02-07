import React from 'react';
import BgEvent from '../../styles/assets/eventbg.webp';
import '../../styles/Event.scss';

const events = [
    { name: "Winter Night Market", date: "January 1-3, 2025", time: "5:00-10:00 PM", location: "Themeland Harbor Center" },
    { name: "Spring Night Market", date: "March 1-3, 2025", time: "5:00-10:00 PM", location: "Themeland Harbor Center" },
    { name: "Summer Night Market", date: "July 1-3, 2025", time: "5:00-10:00 PM", location: "Themeland Harbor Center" },
    { name: "Autumn Night Market", date: "October 1-3, 2025", time: "5:00-10:00 PM", location: "Themeland Harbor Center" }
];

function Event() {
    return (
        <div className="event-container">
            <div className="event-section" style={{ backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.5), rgba(255, 182, 193, 0.5)), url(${BgEvent})` }}>
                <h1>Upcoming Event Dates</h1>
            </div>

            <div className="event-list">
                {events.map((event, index) => (
                    <div key={index} className="event-card">
                        <h4>{event.name}</h4>
                        <div>{event.date}</div>
                        <div>{event.time}</div>
                        <div>{event.location}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Event;
