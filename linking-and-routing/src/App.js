import Homepage from './HomePage';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
      <a href='#' className='nav-item'>HomePage</a>
      <a href='#' className='nav-item'>About Me</a>
      </nav>
      <Homepage />
      <AboutMe />
    </div>
  );
}

export default App;
