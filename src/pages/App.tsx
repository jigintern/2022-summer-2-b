import dynamic from "next/dynamic";
import React from "react";

function MapPage() {
  const Detail = React.useMemo(
    () =>
      dynamic(() => import("src/components/detail"), {
        loading: () => <p>A detail is loading</p>,
        ssr: false,
      }),
    []
  );

  return <Detail />;
}

export default MapPage;
