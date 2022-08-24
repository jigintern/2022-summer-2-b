import { atom } from "recoil";
import { CardDetailProps } from "src/types/cardDetail";

export const cardDetailState = atom<CardDetailProps[]>({
  key: "cardDetail",
  default: [
    {
      id: 1,
      imgURL: "/sabae.png",
      like: 200,
      latitude: 35.94349566577982,
      longitude: 136.1886840250416,
      comment: "人形供養とかじゃないでめがね供養があった",
      age: "20代",
      gender: "女性",
    },
    {
      id: 2,
      imgURL: "/sabae.png",
      like: 300,
      latitude: 35.942916645564445,
      longitude: 136.19877108514828,
      comment: "人形供養とかじゃないでめがね供養があった",
      age: "20代",
      gender: "女性",
    },
    {
      id: 3,
      imgURL: "/sabae.png",
      like: 300,
      latitude: 35.94312026582549,
      longitude: 136.19607069519154,
      comment: "人形供養とかじゃないでめがね供養があった",
      age: "20代",
      gender: "女性",
    },
  ],
  dangerouslyAllowMutability: true,
});
