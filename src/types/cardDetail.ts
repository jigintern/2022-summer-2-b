import { CardProps } from "src/types/card";

export type CardDetailProps = {
  reviews: Review[];
} & CardProps;

type Review = {
  id: number;
  comment: string;
  gender: "男性" | "女性" | "その他";
  age: "10代" | "20代" | "30代" | "40代" | "50代" | "60代" | "70代以上";
};
