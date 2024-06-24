
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div>
     <Header name="Anna" color="purple" />
     <Main greet="howdy"/>
     <Sidebar greet="Hi"/> 
    </div>
  );
}

export default App;
