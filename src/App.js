import './App.css';
// import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './component/Header';
import MusicPage from './pages/MusicPage';
import Community from './pages/Community';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/musicpage' element={<MusicPage/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
