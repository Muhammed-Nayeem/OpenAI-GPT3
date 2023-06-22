import React from "react";
import "./Hero.css";
import sideCover from "../../assets/ai.png";
import users from "../../assets/people.png";

const Hero = () => {
  return (
    <section className="gpt3__hero" id="home">
      <div className="container">
        <div className="gpt3__hero-content">
          <div className="gpt3__hero-content-text">
            <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <div className="gpt3__hero-content_input-field">
              <input type="text" placeholder="Your Email Address" />
              <button type="button">Get Started</button>
            </div>
            <div className="gpt3__hero-content-users">
              <img src={users} alt="peoples" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
          <div className="gpt3__hero-content-img">
            <img src={sideCover} alt="AI" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
