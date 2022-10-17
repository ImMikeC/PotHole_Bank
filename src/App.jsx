import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Footer from './components/Footer';

const App = ({ copyright }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer footer={copyright} />
        </BrowserRouter>

    )
}

export default App;