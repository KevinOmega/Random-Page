import React from "react";

const Why = () => {
  return (
    <section className="section" id="why">
      <h1>Why EF SET?</h1>
      <div className="why-center">
        <div className="card">
          <div className="logo">
            <img
              src="https://a.storyblok.com/f/71234/32x33/2dd9a91916/shield-icon.svg"
              alt=""
            />
          </div>
          <h3>It's Reliable</h3>
          <p>
            <span>Created by experts.</span> This online English proficiency
            test was developed over 5 years with leading scientists in the field
            of English assessment.{" "}
            <a href="https://www.efset.org/about/">Learn more.</a>
          </p>
        </div>
        <div className="card">
          <div className="logo">
            <img
              src="https://a.storyblok.com/f/71234/47x32/9890bc01b2/phone-icon.svg"
              alt=""
            />
          </div>
          <h3>It's Accessible</h3>
          <p>
            <span>An English level test for everyone.</span> EF SET is available
            on any desktop, tablet, or mobile device. All you need is an
            internet connection and less than an hour of your time.
          </p>
        </div>
        <div className="card">
          <div className="logo">
            <img
              src="https://a.storyblok.com/f/71234/30x30/e23916f3d1/gift-icon.svg"
              alt=""
            />
          </div>
          <h3>It's Free</h3>
          <p>
            <span>Why pay for accurate results?</span> There shouldn't be any
            barriers to testing your English. English tests are an important
            tool for building English proficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
