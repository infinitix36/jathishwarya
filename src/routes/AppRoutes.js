import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
import List from "../pages/List";
import Lboard from "../pages/Lboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project></Project>} />
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/stats" element={<List/>} />
        <Route exact path="/lboard" element={<Lboard/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
