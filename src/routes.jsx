import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Dashboard from "./pages/dashboard";
import RegisterForm from "./pages/RegisterForm";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}
