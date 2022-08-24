import { atom } from "recoil";

export const isModalState = atom<boolean>({
  key: "isModal",
  default: false,
  dangerouslyAllowMutability: true,
});
