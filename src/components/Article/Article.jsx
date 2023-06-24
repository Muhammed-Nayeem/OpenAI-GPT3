import React from "react";
import "./Article.css";

const Article = ({ imageUrl, date, title }) => {
  return (
    <article className="gpt3__blog-container_article">
      <div className="gpt3__blog-img">
        <img src={imageUrl} alt="Blog-Image" />
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content_text">
          <span>{date}</span>
          <h3>{title}</h3>
        </div>
        <a href="#">Read Full Details</a>
      </div>
    </article>
  );
};

export default Article;
