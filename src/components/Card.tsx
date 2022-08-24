import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

export const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          outline: "none",
          padding: "0",
          appearance: "none",
        }}
      >
        <Image
          src={"https://i.gyazo.com/15cd08eebb62130043f0181eb02e9c47.png"}
          alt={"gazou"}
          width={300}
          height={200}
        />
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <AiFillHeart />
        <div
          style={{
            marginBottom: "3px",
          }}
        >
          100
        </div>
      </div>
    </div>
  );
};
