import React from "react";
import Bricks from "../Assets/bricks.png";
import Tiles from "../Assets/tilesPattern.png";

function Header() {
  return (
    <header>
      <div className="background-pattern">
        <img src={Bricks} alt="Bricks" className="bricks" />
        <img src={Tiles} alt="" className="tiles" />
      </div>
      <div className="header-text">
        <p>
          Lorem Ipsum <br /> Lorem Ipsum, Lorem <br /> Lorem!
        </p>
      </div>
    </header>
  );
}

export default Header;
