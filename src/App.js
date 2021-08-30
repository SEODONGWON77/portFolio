import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/views/landingPage/Landing.js";
import Header from "./components/views/common/Header.js";
import Footer from "./components/views/common/Footer.js";
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Lodading...</div>}>
        <Header />
        <Landing />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
