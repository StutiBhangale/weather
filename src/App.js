import React from 'react';
import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';
import Login from './components/Login';
import Logout from './components/Logout';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
