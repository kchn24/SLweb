import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>SLCalc v4 🛸</h1>
        <div className="button-container">
          <Link to="/page1">
            <button className="home-button">東京霊園</button>
          </Link>
          <Link to="/page2">
            <button className="home-button">火葬場</button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/page3">
            <button className="home-button">勤務時間</button>
          </Link>
          <Link to="/ShiftCreationPage">
            <button className="home-button">シフト表</button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/ShiftManagerPage">
            <button className="home-button">ログイン</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;