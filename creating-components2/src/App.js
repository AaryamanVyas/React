// App.js
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Header name="John Doe" color="blue"/>
      <div>
        <Main greet="Hello" />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
