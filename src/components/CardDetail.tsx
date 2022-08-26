import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Snapshot, useRecoilValue } from "recoil";
import { Button } from "src/components/Button";
import db from "src/firebase/firebasedb";
import { cardDetailsState } from "src/globalStates/atoms/cardDetailAtom";
import { selectedCardIdState } from "src/globalStates/atoms/selectedCardIdState";

export const CardDetail = () => {
  const cardDetails = useRecoilValue(cardDetailsState);
  const selectedCardId = useRecoilValue(selectedCardIdState);
  const router = useRouter();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == cardDetails[selectedCardId - 1]?.reviews.length) {
      setCount(cardDetails[selectedCardId - 1]?.reviews.length - 1);
      console.log(`count が上限です。count=${count}`);
    } else if (count == -1) {
      setCount(0);
      console.log(`count が下限です。count=${count}`);
    }
    console.log(`count が更新されました。count=${count}`);
  }, [count]);

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
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          <AiFillCaretLeft
            style={{
              fontSize: "4rem",
            }}
          />
        </button>

        <Image
          src={cardDetails[selectedCardId - 1]?.imgURL}
          height="440px"
          width="440px"
          alt="sabae"
          style={{
            borderRadius: "20px",
          }}
        />
        <button
          id="right"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AiFillCaretRight
            style={{
              fontSize: "4rem",
            }}
          />
        </button>
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
        {`${cardDetails[selectedCardId - 1]?.reviews[count]?.gender} ${
          cardDetails[selectedCardId - 1]?.reviews[count]?.age
        }`}
        <br />
        {cardDetails[selectedCardId - 1]?.address}
        <div />
        <div>
          <AiFillHeart />
          <div
            style={{
              float: "right",
              marginLeft: "0.3rem",
            }}
          >
            {cardDetails[selectedCardId - 1]?.like}
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          marginRight: "10rem",
        }}
      >
        {cardDetails[selectedCardId - 1]?.reviews[count]?.comment}
      </div>
      <Button
        onClick={() => {
          router.push("/submission");
        }}
      >
        投稿を追加
      </Button>
    </div>
  );
};
