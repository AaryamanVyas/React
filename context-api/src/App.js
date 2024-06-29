import MealsProvider.js from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import './App.css';

function App() {
  return (
    <MealsProvider >
      <MealsList />
      <Counter.js />
    
  );
}

export default App;
