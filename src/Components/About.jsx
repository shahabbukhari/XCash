import React from "react";
import Logo from "../Assets/logo.png";

function About() {
  return (
    <div className="about">
      <div className="intro">
        <h1>
          About <img src={Logo} alt="logo" />
        </h1>
        <p>
          The X-Cash Foundation is an open-source, no-ICO blockchain project
          launched in 2018 developing a privacy centered cryptocurrency
          inheriting from Monero and bringing new innovation in the privacy coin
          space.
        </p>
      </div>
      <div className="features">
        <p>X-Cash main features are: </p>
        <ul className="features-list">
          <li>
            <span className="highlight">
              FlexPrivacy - Private and public transactions on the same
              blockchain
            </span>
            <br />
            Private by default, X-Cash's FlexPrivacy lets the user decide if
            he/she wants the transaction to be made public.
          </li>
          <li>
            <span className="highlight">
              FlexPrivacy - Private and public transactions on the same
              blockchain
            </span>
            <br />
            Private by default, X-Cash's FlexPrivacy lets the user decide if
            he/she wants the transaction to be made public.
          </li>
          <li>
            <span className="highlight">
              FlexPrivacy - Private and public transactions on the same
              blockchain
            </span>
            <br />
            Private by default, X-Cash's FlexPrivacy lets the user decide if
            he/she wants the transaction to be made public.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
