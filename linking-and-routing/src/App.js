import Homepage from './HomePage';
import AboutMe from './AboutMe';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <nav className='nav'>
      <link to="/" className='nav-ietms'>HomePage</link>
      <link to="/about-me" className='nav-ietms'>About Me</link>
      </nav>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      
    </div>
  );
}

export default App;
