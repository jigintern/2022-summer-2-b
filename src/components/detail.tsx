import Image from "next/image";
import React from "react";
import { Button } from "./Button";
// import "./detail.css";

const Detail = () => {
  const heart = "❤200";
  const person = "女性　10代";
  const place = "福井県鯖江市新横江２丁目３−４";
  const comment = "人形供養とかじゃないでめがね供養があった";

  return (
    <div className="main">
      <div className="main-heart">
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          {heart}
        </div>
      </div>
      <div className="main-picture">
        <Button type="button">
          {/*<Image
            src={`https://i.gyazo.com/15cd08eebb62130043f0181eb02e9c47.png`}
            alt="Logo"
            id="button"
            width={100}
            height={50}
          />*/}
        </Button>
        <Image
          src={`https://i.gyazo.com/15cd08eebb62130043f0181eb02e9c47.png`}
          alt="image"
          width={300}
          height={200}
        />
        <Button>
          {/*<Image
            src={`https://i.gyazo.com/15cd08eebb62130043f0181eb02e9c47.png`}
            alt="Logo"
            id="button"
            width={100}
            height={50}
          />*/}
        </Button>
      </div>
      <div className="main-person">
        <div>
          <p
            style={{
              marginBottom: "30px",
            }}
          >
            {person}
          </p>
          <p
            style={{
              marginBottom: "30px",
            }}
          >
            {place}
          </p>
        </div>
      </div>
      <div className="main-comment">
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          {comment}
        </div>
      </div>
    </div>
  );
};
export default Detail;
