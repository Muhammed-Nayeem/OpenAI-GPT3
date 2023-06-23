import React from 'react';
import "./Brand.css";
import { google, slack, atlassian, dropBox, shopify } from './importImages';

const Brand = () => {
  return (
    <section className="gpt3__brand">
      <div className="container">
        <div className="gpt3__brand-content">
          <div className="gpt3__brand-img">
            <img src={google} alt="Google" />
          </div>
          <div className="gpt3__brand-img">
            <img src={slack} alt="Slack" />
          </div>
          <div className="gpt3__brand-img">
            <img src={atlassian} alt="Atlassian" />
          </div>
          <div className="gpt3__brand-img">
            <img src={dropBox} alt="DropBox" />
          </div>
          <div className="gpt3__brand-img">
            <img src={shopify} alt="Shopify" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
