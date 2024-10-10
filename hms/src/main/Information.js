import React from 'react';
import './mainnavbar.css'

const Information = () => {
  const packages = [
    { name: 'Blood Pressure Test (BP Test)', price: '₹120' },
    { name: 'Complete Blood Count (CBC)', price: '₹300' },
    { name: 'Blood Sugar Test', price: '₹150' },
    { name: 'Lipid Profile', price: '₹800' },
    { name: 'Liver Function Test (LFT)', price: '₹600' },
    { name: 'Kidney Function Test (KFT)', price: '₹700' },
    { name: 'Thyroid Profile', price: '₹500' },
    { name: 'ECG', price: '₹250' },
    { name: 'X-Ray (Chest)', price: '₹500' }
  ];

  return (
    <div className="information-container">
      <h1>Available Medical Packages</h1>
      <p>We offer a wide range of diagnostic tests and health packages at affordable prices.</p>
      
      <div className="packages-list">
        {packages.map((item, index) => (
          <div key={index} className="package-item">
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;