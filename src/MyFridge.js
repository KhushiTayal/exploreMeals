import React, { useState } from "react";
import MealList from "./MealList";

function MyFridge() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");

  function getMealData() {
    const apiKey = '515a5db176df44fe95f8ffe62ab308bd';

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="MyFridge">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Available Ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <select value={diet} onChange={e => setDiet(e.target.value)}>
          <option value="">All</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default MyFridge;
