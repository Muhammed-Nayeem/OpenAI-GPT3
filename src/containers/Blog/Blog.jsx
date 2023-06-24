import React from "react";
import "./Blog.css";
import { blogImage1, blogImage2, blogImage3, blogImage4, blogImage5 } from "./importImages";
import { Article } from "../../components";

const Blog = () => {
  return (
    <section className="gpt3__blog-area">
      <div className="container">
        <article className="gpt3__blog-title">
          <h1 className="gradient__text">
            A lot is happening,
            <br />
            We are blogging about it.
          </h1>
        </article>
        <div className="gpt3__blog-container">
          <div className="gtp3__blog-container_group-A">
            <Article
              imageUrl={blogImage1}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            />
          </div>
          <div className="gpt3__blog-container_group-B">
            <Article
              imageUrl={blogImage2}
              date="June 18, 2022"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imageUrl={blogImage3}
              date="June 15, 2023"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imageUrl={blogImage4}
              date="June 19, 2023"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imageUrl={blogImage5}
              date="June 24, 2023"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
