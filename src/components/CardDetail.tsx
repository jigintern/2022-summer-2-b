import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { Button } from "src/components/Button";
import { cardDetailsState } from "src/globalStates/atoms/cardDetailAtom";
import { selectedCardIdState } from "src/globalStates/atoms/selectedCardIdState";

export const CardDetail = () => {
  const cardDetails = useRecoilValue(cardDetailsState);
  const selectedCardId = useRecoilValue(selectedCardIdState);
  const router = useRouter();

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
        <AiFillCaretLeft
          style={{
            fontSize: "4rem",
          }}
        />
        <Image
          src={cardDetails[selectedCardId - 1]?.reviews[0]?.imgURL}
          height="440px"
          width="440px"
          alt="sabae"
          style={{
            borderRadius: "20px",
          }}
        />
        <AiFillCaretRight
          style={{
            fontSize: "4rem",
          }}
        />
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
        {`${cardDetails[selectedCardId - 1]?.reviews[0]?.gender} ${
          cardDetails[selectedCardId - 1]?.reviews[0]?.age
        }`}
        <br />
        福井県鯖江市新横江２丁目３−４
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
        {cardDetails[selectedCardId - 1]?.reviews[0]?.comment}
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
