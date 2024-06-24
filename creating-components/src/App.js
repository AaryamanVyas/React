import logo from './logo.svg';
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Main'
import './App.css';

function App() {
  return (
    <div>
     <Header name="Anna" color="purple" />
     <Main />
     <Sidebar/> 
    </div>
  );
}

export default App;
