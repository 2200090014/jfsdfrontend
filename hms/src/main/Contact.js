import React from 'react';
import './mainnavbar.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <p>Feel free to reach out to us at any time using the details below:</p>

      <div className="contact-details">
        <h2>Address</h2>
        <p>123 Health Street, Wellness City, HC 45678</p>

        <h2>Phone Number</h2>
        <p>+1 (555) 123-4567</p>

        <h2>Email</h2>
        <p>contact@hospitalmanagement.com</p>

        <h2>Location</h2>
        <p>We are located at the heart of Wellness City. Visit us for any inquiries or emergencies.</p>

        {/* You can embed a map here, like Google Maps */}
        <div className="map-container">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509455!2d144.95373631531598!3d-37.81627967975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e5db74a30df!2sVictoria%20Hospital!5e0!3m2!1sen!2sin!4v1618820912345!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;