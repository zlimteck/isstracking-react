import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Expeditions from "./pages/Expeditions/Expeditions";
import Tracking from "./pages/Tracking/Tracking";
import Error404 from "./pages/Error404/Error404";
import Expedition from "./pages/Expedition/Expedition";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { inject } from '@vercel/analytics';

inject()

function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tracking" element={<Tracking />} />
                    <Route path="/expeditions" element={<Expeditions />} />
                    <Route path="expeditions/:id" element={<Expedition />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </div>
        </React.StrictMode>
    );
}

export default App;