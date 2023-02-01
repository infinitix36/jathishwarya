import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project></Project>} />
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
