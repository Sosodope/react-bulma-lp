import React from "react";

const Solutions = props => {
  return (
    <section className="section">
      <div className="container">
        <img src={props.src} alt={props.title} />
        <h4 className="title">{props.title}</h4>
        <p className="subtitle">{props.description}</p>
      </div>
    </section>
  );
};

export default Solutions;
