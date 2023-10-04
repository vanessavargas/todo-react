import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home";
import Dashboard from "./pages/dashboard";

export default function Rotas() {
    return (
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>    
      </BrowserRouter>
    );
  }