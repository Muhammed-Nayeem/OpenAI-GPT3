import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const currentYear = () => {
    let year = new Date();
    return year.getFullYear();
  };

  return (
    <footer className="gpt3__footer">
      <div className="container">
        <div className="gpt3__footer-content">
          <div className="gpt3__footer-content_text">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            <button type="button">Request Early Access</button>
          </div>
          <div className="gpt3__footer-links_container">
            <div className="gpt3__footer-link">
              <img src={logo} alt="GPT3" />
              <p>GPT3 is an Open AI project base on the ML and AI.</p>
            </div>
            <div className="gpt3__footer-link">
              <h3>Links</h3>
              <ul>
                <li><a href="#">Overalls</a></li>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Counters</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="gpt3__footer-link">
              <h3>Company</h3>
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy & Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="gpt3__footer-link">
              <h3>Get In Touch</h3>
              <ul>
                <li><a href="#">Dhaka - 1280</a></li>
                <li><a href="#">075-1325678</a></li>
                <li><a href="#">info@gpt3.net</a></li>
              </ul>
            </div>
          </div>
          <div className="gpt3__footer-copyright_text">
            <p>&copy;{currentYear()} GPT3 Open-AI || All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
