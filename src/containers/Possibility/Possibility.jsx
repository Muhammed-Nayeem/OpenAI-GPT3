import React from 'react';
import "./Possibility.css";
import app from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <section className="gpt3__possibility" id="possibility">
      <div className="container">
        <div className="gpt3__possibility-content">
          <div className="gpt3__possibility-img">
            <img src={app} alt="Possibility" />
          </div>
          <div className="gpt3__possibility-info">
            <a href="#" className="link-1">Explore The Library</a>
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <a href="#" className="link-2">Request Early Access to Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possibility;
