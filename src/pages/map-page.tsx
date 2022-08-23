import dynamic from "next/dynamic";
import React from "react";

function MapPage() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("src/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return <Map />;
}

export default MapPage;
