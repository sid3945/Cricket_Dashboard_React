import './App.css';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rohit from './pages/Rohit';
import Virat from './pages/Virat';
// import Login from './pages/Login';
import Pujara from './pages/Pujara';
import Warner from './pages/Warner';
import Steve from './pages/Steve';
import Marnus from './pages/Marnus';
import Sachin from './pages/Sachin';
import Gavaskar from './pages/Gavaskar';
import Border from './pages/Border';
import Ponting from './pages/Ponting';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          {/* <Route path='/login' element={<Login/>} /> */}
          <Route path="/" element={<Home/>}/>
          <Route path='/rohit' element={<Rohit/>} />
          <Route path='/virat' element={<Virat/>} />
          <Route path='/pujara' element={<Pujara/>} />
          <Route path='/warner' element={<Warner/>} />
          <Route path='/smith' element={<Steve/>} />
          <Route path='/labuschagne' element={<Marnus/>} />
          <Route path='/gavaskar' element={<Gavaskar/>} />
          <Route path='/border' element={<Border/>} />
          <Route path='/sachin' element={<Sachin/>} />
          <Route path='/ponting' element={<Ponting/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
