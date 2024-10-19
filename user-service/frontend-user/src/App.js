// import Cards from "./assets/desktop/images/logo-login.svg";
// import ReactDOM from 'react-dom';

// import './App.css';
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage';
import StudyPlan from './pages/StudyPlan/StudyPlan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studyplan" element={<StudyPlan />} />
    </Routes>
  );
}

export default App;
