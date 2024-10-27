// import Cards from "./assets/desktop/images/logo-login.svg";
// import ReactDOM from 'react-dom';

// import './App.css';
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage';
import StudyPlan from './pages/StudyPlan/StudyPlan';
import RegisterCourse from './pages/RegisterCourse/RegisterCourse';
import Schedule from './pages/Schedule/Schedule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studyplan" element={<StudyPlan />} />
      <Route path="/registercourse" element={<RegisterCourse />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
