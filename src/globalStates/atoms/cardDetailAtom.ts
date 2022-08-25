import { atom } from "recoil";
import { CardDetailProps } from "src/types/cardDetail";

export const cardDetailsState = atom<CardDetailProps[]>({
  key: "cardDetail",
  default: [],
  dangerouslyAllowMutability: true,
});
