import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// pages
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import Inclusions from "./pages/Inclusions";
import LivingConditions from "./pages/LivingConditions";
import WhatToBring from "./pages/WhatToBring";
import WhySpecial from "./pages/WhySpecial";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/inclusions" element={<Inclusions />} />
        <Route path="/living" element={<LivingConditions />} />
        <Route path="/bring" element={<WhatToBring />} />
        <Route path="/why" element={<WhySpecial />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
