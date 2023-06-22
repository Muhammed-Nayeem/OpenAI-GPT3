import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="container">
      <nav className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links-logo">
            <img src={logo} alt="gpt3" />
          </div>
          <ul className="gpt3__navbar-links-container">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#wgpt3">What Is GPT3?</a>
            </li>
            <li>
              <a href="#possibility">Open AI</a>
            </li>
            <li>
              <a href="#features">Case Studies</a>
            </li>
            <li>
              <a href="#blog">Library</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__navbar-sign">
          <button type="button" className="btn-link">
            Sign in
          </button>
          <button type="button" className="btn-solid">
            Sign up
          </button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <XMarkIcon
              className="cross-icon"
              color="#fff"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <Bars3BottomLeftIcon
              className="3bars-icon"
              color="#fff"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <ul className="gpt3__navbar-menu_container-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#wgpt3">What Is GPT3?</a>
                </li>
                <li>
                  <a href="#possibility">Open AI</a>
                </li>
                <li>
                  <a href="#features">Case Studies</a>
                </li>
                <li>
                  <a href="#blog">Library</a>
                </li>
              </ul>
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button" className="btn-link">
                  Sign in
                </button>
                <button type="button" className="btn-solid">
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
