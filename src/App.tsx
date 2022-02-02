import React from "react";
import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
