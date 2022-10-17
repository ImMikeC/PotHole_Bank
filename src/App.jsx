import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = ({ copyright }) => {
  return (
    <>
      <Footer footer={copyright} />
      <Navbar />
    </>
  );
};

export default App;
