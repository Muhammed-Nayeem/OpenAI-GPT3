import React from "react";
import "./App.css";
import { Blog, Features, Footer, Hero, Possibility, WhatGPT3 } from "./containers";
import { Brand, CTA, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <header className="gradient__bg">
        <Navbar />
        <Hero />
      </header>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
