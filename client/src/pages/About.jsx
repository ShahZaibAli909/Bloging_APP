
import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h2>About This App</h2>
      <div className="card">
        <p>
          This is a full-stack application built with:
        </p>
        <ul>
          <li><strong>Frontend:</strong> React with Create React App</li>
          <li><strong>Backend:</strong> Node.js with Express</li>
          <li><strong>Routing:</strong> React Router DOM</li>
          <li><strong>HTTP Client:</strong> Axios</li>
        </ul>
        <p>
          The application demonstrates a typical full-stack architecture with
          a React frontend communicating with an Express backend API.
        </p>
      </div>
    </div>
  );
};

export default About;
