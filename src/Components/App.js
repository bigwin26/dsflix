import React from "react";
import Router from "Components/Router";
import Header from "Components/Header";
import GlobalStyles from "Components/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;