import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Municipality from "./views/Municipality";
import People from "./views/People";
import Footer from "./components/Footer";

const App = ({ copyright }) => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/municipality" element={<Municipality/>} />
                <Route path="/people" element={<People/>} />
            </Routes>
            <Footer footer={copyright} />
        </BrowserRouter>
    );
};

export default App;
