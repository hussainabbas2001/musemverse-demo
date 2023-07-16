import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Artifacts from './components/Artifacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Artifacts" element={<Artifacts />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
  </BrowserRouter>
);
