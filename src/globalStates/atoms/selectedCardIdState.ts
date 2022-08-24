import { atom } from "recoil";

export const selectedCardIdState = atom<number>({
  key: "isModal",
  default: undefined,
  dangerouslyAllowMutability: true,
});
