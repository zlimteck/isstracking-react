import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Expeditions from "./pages/Expeditions/Expeditions";
import Tracking from "./pages/Tracking/Tracking";
import Error404 from "./pages/Error404/Error404";
import Expedition from "./pages/Expedition/Expedition";
import Lives from "./pages/Lives/Lives";

export const RouteFile = (
    <React.Fragment>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tracking" element={<Tracking />} />
        <Route exact path="/expeditions" element={<Expeditions />} />
        <Route exact path="expeditions/:id" element={<Expedition />} />
        <Route exact path="live" element={<Lives />} />
        <Route path="*" element={<Error404 />} />
    </React.Fragment>
);