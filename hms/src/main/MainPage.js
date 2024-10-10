import React from 'react';
import './mainnavbar.css'

const Home = () => {
  return (
    <div>
      {/* Main Section */}
      <section className="main-section">
        <div className="container text-center">
          <h1>Welcome to Our Hospital Management System</h1>
          <p>We provide the best healthcare services for your well-being.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h1 align="center">Our Services</h1>
          <br></br>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <h3>Consultation</h3>
                <p>Book appointments with our top specialists and get medical consultations from the comfort of your home.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <h3>Medical Records</h3>
                <p>Access all your medical history, prescriptions, and lab results online with ease and security.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <h3>Emergency Services</h3>
                <p>Our hospital is available 24/7 for emergency situations. Quick and reliable support in critical cases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
  <div className="cta-container text-center">
    <h2 align="center">Need to book an appointment?</h2>
    <p align="center">Schedule an appointment with our specialists and get the care you need right away!</p>
  </div>
</section>

    </div>
  );
};

export default Home;