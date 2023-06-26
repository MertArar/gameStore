import logo from "./logo.svg";
import "./App.module.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import React, { useEffect, useState } from "react";
import Browse from "./Containers/Browse/Browse";
import GamePage from "./Containers/GamePage/GamePage";
import "./App.module.css";

import NotFound from "./Containers/NotFound/NotFound";
import Home from "./Containers/Home/Home";
import { AnimatePresence } from "framer-motion";
import filterNames from "./utils/filterNames";
import games from "./utils/games";
import templateGame from "./utils/templateGame";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/" element={<GamePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
