import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import CountriesDetails from "./CountriesDetails.tsx";
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:alpha2Code" element={<CountriesDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
