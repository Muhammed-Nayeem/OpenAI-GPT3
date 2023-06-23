import React from 'react';
import "./WhatGPT3.css";
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <section className="gpt3__wgpt3" id="wgpt3">
      <div className="container">
        <div className="gpt3__wgpt3-content">
          <div className="gpt3__wgpt3-feature">
            <Feature title="What is GPT-3" description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
          </div>
          <div className="gpt3__wgpt3-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <a href="#">Explore The Library</a>
          </div>
          <div className="gpt3__wgpt3_features">
            <div className="gpt3__feature">
              <Feature title="Chatbots" description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
            </div>
            <div className="gpt3__feature">
              <Feature title="Knowledgebase" description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
            <div className="gpt3__feature">
              <Feature title="Education" description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
