import React from 'react';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './component/Header';
import MusicPage from './pages/MusicPage';
import Community from './pages/Community';
import MyPage from './pages/MyPage';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/musicpage" element={<MusicPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
