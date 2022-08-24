import dynamic from "next/dynamic";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./map-page";

function MapPage() {
  const Detail = React.useMemo(
    () =>
      dynamic(() => import("src/components/detail"), {
        loading: () => <p>A detail is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Detail />
      <Router>
        <Route path="/App" component={Detail} />
        <Route path="/map-page" component={Page} />
      </Router>
    </div>
  );
}

export default MapPage;
