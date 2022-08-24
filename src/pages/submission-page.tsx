import { NextPage } from "next";
import React from "react";
import Submission from "src/components/Submission";

export const SubmissionPage: NextPage = () => {
  return (
    <Submission
      address={""}
      comment={""}
      gender={""}
      age={""}
      id={0}
      imgURL="/sabae.png"
      like={0}
      latitude={0}
      longitude={0}
    />
  );
};
