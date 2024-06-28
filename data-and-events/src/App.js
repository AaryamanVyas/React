import Child from './child';
import './App.css';

function App() {
  const date = new Date()
  
  return (
    <div>
      <Child message={date.toLocaleTimeString()} />
    </div>
  );
}

export default App;
