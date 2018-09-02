import React from "react";

const Solutions = props => {
  return (
    <section className="section solutions">
      <img src={props.src} alt={props.title} />
      <div className="content">
        <h4 className="title">{props.title}</h4>
        <p className="subtitle">{props.description}</p>
      </div>
    </section>
  );
};

export default Solutions;
