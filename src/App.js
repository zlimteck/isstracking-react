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

console.log(
    "Site web de tracking de la Station Spatial Internationnal.\n" +
    "Vous trouverez la position de l'ISS sur une map (leaflet) ainsi que les différentes expéditions vers celle-ci.\n" +
    "Développer avec React.js, j'utilise également l'api (wheretheiss) pour la position de l'ISS et un api développé par mes soins pour les expéditions."
);

export default App;