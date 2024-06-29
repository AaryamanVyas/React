import React from "react";
import MealsProvider from "./providers/MealProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";

function App() {
  return (
    <MealsProvider>
      <MealsList />
      <Counter />
    </MealsProvider>
  );
}

export default App;
