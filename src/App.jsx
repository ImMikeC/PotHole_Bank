import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Municipality from "./views/Municipality";
import People from "./views/People";
import Login from "./views/Login";
import PeopleRegister from "./views/PeopleRegister";
import MuniRegister from "./views/MuniRegister";
import PeopleDashboard from "./views/PeopleDashboard";
import NotFound from "./views/NotFound";
import Forgot from "./views/Forgot";
import Footer from "./components/Footer";

const App = ({ copyright }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/municipality" element={<Municipality />} />
        <Route path="/municipality/register" element={<MuniRegister />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/register" element={<PeopleRegister />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/change/password" element={<Forgot />} />
        <Route path="/people/dashboard" element={<PeopleDashboard />} />
      </Routes>
      <Footer footer={copyright} />
    </BrowserRouter>
  );
};

export default App;
