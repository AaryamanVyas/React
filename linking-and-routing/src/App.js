import Homepage from './HomePage';
import AboutMe from './AboutMe';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <nav className='nav'>
      <a href='#' className='nav-item'>HomePage</a>
      <a href='#' className='nav-item'>About Me</a>
      </nav>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      
    </div>
  );
}

export default App;
