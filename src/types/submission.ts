import { CardProps } from "src/types/card";

export type SubmissionProps = {
  imgURL: string;
  comment: string;
  gender: "男性" | "女性" | "その他";
  age: "10代" | "20代" | "30代" | "40代" | "50代" | "60代" | "70代以上";
} & CardProps;
