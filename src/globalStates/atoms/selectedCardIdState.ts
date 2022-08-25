import { atom } from "recoil";

export const selectedCardIdState = atom<number>({
  key: "selectedCardId",
  default: undefined,
  dangerouslyAllowMutability: true,
});
