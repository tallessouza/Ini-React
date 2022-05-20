import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Repos from "./Repos";
import Home from "./Home";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/repos' element={<Repos/>} />
      </Routes>
    </Router>
  )
}