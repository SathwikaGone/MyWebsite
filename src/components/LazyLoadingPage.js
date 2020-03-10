import React, { Component, lazy, Suspense } from "react";
const Home = lazy(() => import("./Home"));

export default class LazyLoadingPage extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </div>
    );
  }
}
