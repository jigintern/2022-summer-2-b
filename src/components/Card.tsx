import { Modal } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { isModalState } from "src/globalStates/atoms/IsModalAtom";

export const Card = () => {
  const [isModal, setIsModal] = useRecoilState(isModalState);

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
        onClick={() => {
          setIsModal(true);
        }}
      >
        <Image src="/sabae.png" alt={"gazou"} width={300} height={200} />
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
