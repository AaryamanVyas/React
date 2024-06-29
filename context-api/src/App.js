import MealsProvider from "./providers/MealProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter"
import './App.css';

function App() {
  return (
    <MealsProvider>
      <MealsList />
      <Counter.js />
    </MealsProvider>
      
    
  );
}

export default App;
