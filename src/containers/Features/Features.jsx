import React from "react";
import "./Features.css";
import { Feature } from "../../components";

const Features = () => {
  const featuresData = [
    {
      id: "F1",
      title: "Improving end distrusts instantly",
      texts:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      id: "F2",
      title: "Become the tended active",
      texts:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      id: "F3",
      title: "Message or am nothing",
      texts:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      id: "F4",
      title: "Really boy law county",
      texts:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  return (
    <section className="gpt3__features-area" id="features">
      <div className="container">
        <div className="gpt3__features-content">
          <div className="gpt3__features-heading">
            <h1 className="gradient__text">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <a href="#">Request Early Access to Get Started</a>
          </div>
          <div className="gpt3__features-container">
            {featuresData.map((feature) => (
              <div className="gpt3__features_feature" key={feature.id}>
                <Feature title={feature.title} description={feature.texts} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
