import React from "react";
import { Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { RouteFile } from "./routes";
import { inject } from '@vercel/analytics';

inject()

function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <Header />
                <Routes>
                    {RouteFile}
                </Routes>
                <Footer />
            </div>
        </React.StrictMode>
    );
}

export default App;