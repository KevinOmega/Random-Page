import React from "react";

const Home = () => {
  return (
    <section className="section linear-gradient-1" id="home">
      <div className="info">
        <h4>The first free standardized English test online</h4>
        <p>
          Take the EF Standard English Test and get an accurate assessment of
          your English level from home
        </p>
        <button>Test your English now</button>
      </div>
      <div className="hero">
        <img
          src="https://a.storyblok.com/f/79503/818x1272/7e29da7e3d/iphone-d-2x.png"
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Home;
