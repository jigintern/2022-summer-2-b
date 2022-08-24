import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function chanege(i: number, n: number) {
  if (i == n) {
    return (i = 0);
  }

  return i + 1;
}
function back(i: number, n: number) {
  if ((i = 0)) {
    return (i = n);
  }

  return i - 1;
}

export const CardDetail = () => {
  let person = ["女性 10代", "男性 10代"];
  let place = ["福井県鯖江市新横江２丁目３−４", "東京"];
  let comment = ["人形供養とかじゃないでめがね供養があった", "いいね"];
  let img = ["/sabae.png", "/sabae.png"];
  let i: number = 0;
  const n: number = 2;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "700px",
        alignItems: "center",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <button onClick={chanege(i, n)}>
          <AiFillCaretLeft
            style={{
              fontSize: "4rem",
            }}
          />
        </button>
        {/*<AiFillCaretLeft
          style={{
            fontSize: "4rem",
          }}
        />*/}
        <Image
          src={img[i]}
          height="440px"
          width="440px"
          alt="sabae"
          style={{
            borderRadius: "20px",
          }}
        />
        <button onClick={back(i, n)}>
          <AiFillCaretRight
            style={{
              fontSize: "4rem",
            }}
          />
        </button>
        {/*<AiFillCaretRight
          style={{
            fontSize: "4rem",
          }}
        />*/}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: "5.5rem",
        }}
      >
        {person[i]} <br />
        {place[i]}
        <div />
        <div>
          <AiFillHeart />
          <div
            style={{
              float: "right",
              marginLeft: "0.3rem",
            }}
          >
            100
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          marginRight: "10rem",
        }}
      >
        {comment[i]}
      </div>
    </div>
  );
};
