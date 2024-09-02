import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import ShiftCreationPage from './ShiftCreationPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/ShiftCreationPage" element={<ShiftCreationPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);