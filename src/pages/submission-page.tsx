import dynamic from "next/dynamic";
import React from "react";

export const SubmissionPage: React.FC = () => {
  const Submission = React.useMemo(
    () =>
      dynamic(() => import("src/components/Submission"), {
        loading: () => <p>loading</p>,
        ssr: false,
      }),
    []
  );

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
