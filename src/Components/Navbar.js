import React, { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  const clickLinks = () => {
    if (isClicked) {
      setIsClicked(false);
      document.body.style.overflowY = "visible";
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h2>ET SET</h2>
      </div>
      <nav className="links">
        <ul className={isClicked && "show"}>
          <li>
            <a onClick={clickLinks} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={clickLinks} href="#why">
              Why
            </a>
          </li>
          <li>
            <a onClick={clickLinks} href="#price">
              Price
            </a>
          </li>

          <li>
            <a onClick={clickLinks} href="#overview">
              Overview
            </a>
          </li>
          <li>
            <a onClick={clickLinks} href="#certificate">
              Certificate
            </a>
          </li>
          <li>
            <a onClick={clickLinks} href="#footer">
              Footer
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={`${isClicked && "svg-X"} svg-button`}
        onClick={handleClick}
      >
        <svg height={30} width={30}>
          <line
            className="line1"
            x1={0}
            y1={5}
            x2={20}
            y2={5}
            stroke="black"
            strokeWidth={3}
          ></line>
          <line
            className="line2"
            x1={0}
            y1={12}
            x2={20}
            y2={12}
            stroke="black"
            strokeWidth={3}
          ></line>
          <line
            className="line3"
            x1={0}
            y1={19}
            x2={20}
            y2={19}
            stroke="black"
            strokeWidth={3}
          ></line>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
