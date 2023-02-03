import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
import List from "../pages/List";
import Lboard from "../pages/Lboard";
import CreateProject from "../pages/CreateProject";
import Newpg from "../pages/Newpg";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project></Project>} />
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/stats" element={<List/>} />
        <Route exact path="/lboard" element={<Lboard/>} />
        <Route exact path="/createproj" element={<CreateProject/>} />
        <Route exact path="/list" element={<List/>} />
        <Route exact path="/success" element={<Newpg/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
