import { NextPage } from "next";
import React from "react";
import Submission from "src/components/Submission";

const SubmissionPage: NextPage = () => {
  return (
    <Submission
      address={""}
      comment={""}
      gender={"女性"}
      age={"10代"}
      id={0}
      imgURL="/sabae.png"
      like={0}
      latitude={0}
      longitude={0}
    />
  );
};

export default SubmissionPage;
