import React from "react";

const Footer = () => {
  return (
    <section className="section" id="footer">
      <div className="more">
        <div className="card">
          <div className="header">
            <h2>About EF SET</h2>
          </div>
          <ul>
            <li>
              <p>About the test</p>
            </li>
            <li>
              <p>Our English score scale</p>
            </li>
            <li>
              <p>Research and EF EPI</p>
            </li>
            <li>
              <p>FAQ</p>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="header">
            <h2>Discover</h2>
          </div>
          <ul>
            <li>
              <p>EF SET certificate</p>
            </li>
            <li>
              <p>CEFR explained</p>
            </li>
            <li>
              <p>Assessment solutions for schools and companies</p>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="header">
            <h2>Learn English with EF</h2>
          </div>
          <ul>
            <p>Learn English abroad</p>
            <p>Learn English online</p>
          </ul>
        </div>

        <div className="card">
          <div className="header">
            <h2>Get in touch!</h2>
          </div>
          <ul>
            <li>
              <a href="https://www.facebook.com/efset.org">
                <div className="icon"></div>Follow us on Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/efset/">
                <div className="icon"></div>Follow us on Linkedln
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EFSET">
                <div className="icon"></div>Follow us on Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="image">
          <img
            src="https://a.storyblok.com/f/71234/55x32/30f41b86ba/logo.svg"
            alt="logo"
          />
        </div>
        <div className="language"></div>
        <div className="links"></div>
      </footer>
    </section>
  );
};

export default Footer;
