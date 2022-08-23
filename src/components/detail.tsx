import Image from "next/image";
import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <div className="main">
      <div className="main-heart">
        <div>❤200</div>
      </div>
      <div className="main-picture">
        <button type="button">
          <Image src={`reversetriangle.png`} alt="Logo" id="button" />
        </button>
        <Image src={`test.png`} alt="Logo" />
        <button type="button">
          <Image src={`triangle.png`} alt="Logo" id="button" />
        </button>
      </div>
      <div className="main-person">
        <div>
          <h1 text-align:center>女性　10代</h1>
          <p>福井県鯖江市新横江２丁目３−４</p>
        </div>
      </div>
      <div className="main-comment">
        <div>人形供養とかじゃないでめがね供養があった</div>
      </div>
    </div>
  );
};
export default Detail;
