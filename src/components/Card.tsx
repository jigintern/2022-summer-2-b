import { Modal } from "@mantine/core";
import Image from "next/image";
import { FC, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { isModalState } from "src/globalStates/atoms/IsModalAtom";
import { CardPopUpProps } from "src/types/cardPopUp";

export const Card: FC<CardPopUpProps> = (props) => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const { like, imgURL } = props;

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
        <Image src={imgURL} alt={"gazou"} width={300} height={200} />
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
          {like}
        </div>
      </div>
    </div>
  );
};
