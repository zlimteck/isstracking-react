import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Missions from "./pages/Missions/Missions";
import Tracking from "./pages/Tracking/Tracking";
import Error from "./pages/Error/Error";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </React.StrictMode>
  );
}

export default App;
