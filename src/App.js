import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllNews from "./news/allNews";
import EntertainmentNews from "./news/entertainmentNews";
import TechnologyNews from "./news/technologyNews";
import ScienceNews from "./news/scienceNews";
import BusinessNews from "./news/businessNews";
import HealthNews from "./news/healthNews";
import SportsNews from "./news/sportsNews";
import PageNotFound from "./page-not-found";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="all-news" replace={true} />} />
        <Route path="all-news" element={<AllNews />} />
        <Route index element={<AllNews />} />
        <Route path="entertainment" element={<EntertainmentNews />} />
        <Route path="technology" element={<TechnologyNews />} />
        <Route path="science" element={<ScienceNews />} />
        <Route path="business" element={<BusinessNews />} />
        <Route path="health" element={<HealthNews />} />
        <Route path="sports" element={<SportsNews />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
