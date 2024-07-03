import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form>
        <div className="output-box"> 
          <p ref={resultRef}> 
            {result} 
          </p> 
        </div>
        <input
        pattern="[0-9]"
        ref={inputRef}
        type="number"
        placeholder="Type a number"
        className="center-input"
      />
        <div className="button-container">
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={times}>*</button>
          <button onClick={divide}>/</button>
        </div>
        <div className="button-container">
          <div className="button-spacing">
          <button onClick={resetInput} className="wide-button orange">
            Clear Input
          </button>
          <button onClick={resetResult} className="wide-button orange">
            Clear Result
          </button>

          </div>
        </div>

        
      </form> 
    </div> 
  ); 
} 
 
export default App; 

