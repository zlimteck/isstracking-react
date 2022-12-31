import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Missions from "./pages/Missions/Missions";
import Tracking from "./pages/Tracking/Tracking";
import Error from "./pages/Error/Error";
import Expeditions from "./pages/Expeditions/Expeditions";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <React.StrictMode>
            <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/missions" element={<Missions />} />
                <Route path="missions/:id" element={<Expeditions />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
        </React.StrictMode>
    );
}

export default App;