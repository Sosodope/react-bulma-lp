import React from "react";
import Solutions from "./layout/Solutions";
import MediaMentions from "./layout/MediaMentions";
import SignUp from "./layout/SignUp";
import Customers from "./layout/Customers";

const Home = () => {
  return (
    <div>
      <section className="hero is-success is-fullheight">
        <div className="hero-body is-fullheight">
          <div className="container has-text-centered">
            <h1 className="title">Title</h1>
            <h2 className="subtitle">Subtitle</h2>
          </div>
        </div>
      </section>
      <div className="container">
        <Solutions />
        <Solutions />
        <Solutions />
        <div>
          <SignUp />
        </div>
        <Customers />
        <MediaMentions />
      </div>
    </div>
  );
};

export default Home;
