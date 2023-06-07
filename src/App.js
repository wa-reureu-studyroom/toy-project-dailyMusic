import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './component/Header';
import MusicPage from './pages/MusicPage';
import Community from './pages/Community';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';


function App() {
  const [datas, setDatas] = useState([]);

  const url = "http://localhost:3001/articles";

  useEffect (() => {
    axios.get(url)
    .then((res) => console.log(res)) 
    .catch((error) => console.log(error))
  }, [])

  return (
    <BrowserRouter>
      <div className='loginPage'>
        <LoginPage />
      </div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main datas={datas} />} />
          <Route path="/musicpage" element={<MusicPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
