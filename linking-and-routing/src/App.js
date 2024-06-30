import Homepage from './HomePage';
import AboutMe from './AboutMe';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to="/" className='nav-items'>HomePage</Link>
        <Link to="/about-me" className='nav-items'>About Me</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
