import React from "react";
import Solutions from "./layout/Solutions";
import MediaMentions from "./layout/MediaMentions";
import SignUp from "./layout/SignUp";
import Customers from "./layout/Customers";
import { NavLink } from "react-router-dom";
import layers from "./assets/images/layers.svg";
import monitor from "./assets/images/monitor.svg";
import test from "./assets/images/test.svg";
import smartphone from "./assets/images/smartphone.svg";

const services = [
  {
    title: "Mobile Development",
    description:
      "We develop mobile apps for all contemporary mobile platforms. Mamon team builds native and cross-platform solutions.",
    src: `${smartphone}`
  },
  {
    title: "Web Development",
    description:
      "Mamon offers full range of services from various CMS and frameworks based websites to complex ERP / CRM solutions and e-commerce stores.",
    src: `${monitor}`
  },
  {
    title: "Quality Assurance",
    description:
      "Our QA team ensures high standard of quality of products delivered.",
    src: `${layers}`
  },
  {
    title: "Product Design",
    description:
      "We create design given the product audience, goal, business domain, technology and the platform for the solution.",
    src: `${test}`
  }
];

const Home = () => {
  return (
    <div className="wrapper">
      <section className="hero is-large">
        <div className="hero-body is-fullheight">
          <div className="container">
            <h1 className="title">We're an independent development agency.</h1>
            <h2 className="subtitle">
              We understand the intricacies of web development inside-out.
              That's why we build rock-solid Mobile and Web applications
              enriched with user-centered visual experiences.
            </h2>
            <NavLink className="button is-primary" to="/">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
      <div className="container">
        <p>Our Services</p>
        <div className="services">
          {services.map((service, index) => {
            return (
              <Solutions
                key={index}
                title={service.title}
                src={service.src}
                description={service.description}
              />
            );
          })}
        </div>
        <div className="container">
          <p>Our Clients</p>
          <Customers />
        </div>

        <MediaMentions />
      </div>
    </div>
  );
};

export default Home;
