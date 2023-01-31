import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "../pages/Project";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project></Project>} />
        <Route exact path="/project" element={<Project></Project>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
