import React from "react";

const Price = () => {
  return (
    <section className="section linear-gradient-1" id="price">
      <div className="price-header">
        <h2>Test your English now</h2>
      </div>
      <div className="price-center">
        <div className="card">
          <div className="card-header">
            <div className="minutes">
              <p>15</p>
            </div>
            <div className="info">
              <p>min</p>
              <h4>QUICK CHECK</h4>
            </div>
          </div>
          <div className="card-center">
            <h4>Check your English level</h4>
            <ul>
              <li>
                <p>No fees. No sign up. Start now</p>
              </li>
              <li>
                <p>Beginner , intermediate, and advanced</p>
              </li>
              <li>
                <p>Share your score on social media</p>
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <button>Take the quiz</button>
            <a href="https://www.efset.org/quick-check/">Learn more</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="minutes">
              <p>50</p>
            </div>
            <div className="info">
              <p>min</p>
              <h4>EF SET</h4>
            </div>
          </div>
          <div className="card-center">
            <h4>Certify your English proficiency</h4>
            <ul>
              <li>
                <p>Registration is free</p>
              </li>
              <li>
                <p>Results fully aligned with CEFR levels</p>
              </li>
              <li>
                <p>Get a personalized EF SET Certificate</p>
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <button>Take the test</button>
            <a href="https://www.efset.org/ef-set-50/">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
