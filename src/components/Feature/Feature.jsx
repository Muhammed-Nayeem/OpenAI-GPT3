import React from "react";
import "./Feature.css";

const Feature = ({ title, description }) => {
  return (
    <>
      <div className="gpt3__feature-title">
        <div className="gpt3__feature_title-bar" />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__feature-description">
        <p>{description}</p>
      </div>
    </>
  );
};

export default Feature;
