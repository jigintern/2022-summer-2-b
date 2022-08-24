import { CardProps } from "src/types/card";

export type CardDetailProps = {
  comment: string;
  gender: string;
  age: string;
} & CardProps;
