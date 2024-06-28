import React, { useState } from 'react';
import Heading from './Heading';
import './App.css';

function App() {
  cosnt [word, setWord] = React.useState('eat')
  return (
    <div className='App'>
      <Heading message={word + "at Little Lemon"} />
    </div>
  );
}

export default App;
