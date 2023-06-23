import React from 'react';
import "./CTA.css";

const CTA = () => {
  return (
    <section className="gpt3__CTA">
      <div className="container">
        <div className="gpt3__CTA-content">
          <div className="gpt3__CTA-content-info">
            <div className="gpt3__CTA-info_text">
              <a href="#">Request Early Access to Get Started</a>
              <h1>Register today & start exploring the endless possibilities.</h1>
            </div>
            <button type="button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
