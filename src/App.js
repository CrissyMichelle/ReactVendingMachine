import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import CandyBar from "./CandyBar";
import Gatorade from "./Gatorade";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candybar" element={<CandyBar />} />
        <Route path="/gatorade" element={<Gatorade />} />
      </Routes>
    </Router>
  );
}

export default App;
