import React from "react";

const Overview = () => {
  return (
    <section className="section" id="overview">
      <div className="hero">
        <img
          src="https://a.storyblok.com/f/71234/91x91/2aade672ab/s4-mobile-image.svg"
          alt="Image1"
        />
      </div>
      <div className="info">
        <h2>A scalable English testing solution for any organization</h2>
        <p>
          We have helped over 3,000 schools and organizations around the world
          define proficiency benchmarks using our English level test.
        </p>
        <button className="btn">English assessment solutions</button>
      </div>
    </section>
  );
};

export default Overview;
