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
import InfoFamily from './pages/InfoFamily/InfoFamily';
import MoreInfo from './pages/MoreInfo/MoreInfo';
import UpdateInfo from './pages/UpdateInfo/UpdateInfo';
import ResultStudy from './pages/ResultStudy/ResultStudy';
import Dorm from './pages/Dorm/Dorm';
import Notification from './pages/Notification/Notification';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studyplan" element={<StudyPlan />} />
      <Route path="/registercourse" element={<RegisterCourse />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/infofamily" element={<InfoFamily />} />
      <Route path="/moreinfo" element={<MoreInfo />} />
      <Route path="/updateinfo" element={<UpdateInfo />} />
      <Route path="/resultstudy" element={<ResultStudy />} />
      <Route path="/dorm" element={<Dorm />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
}

export default App;
