import React, { useState } from "react";
import MealList from "./MealList";
import "./SearchByNutrients.css";

function SearchByNutrients() {
  const [nutrientLimits, setNutrientLimits] = useState({
    calories: "",
    protein: "",
    fat: "",
    carbohydrate: "",
  });
  const [mealData, setMealData] = useState(null);

  function handleSearch(e) {
    e.preventDefault();

    const apiKey = "515a5db176df44fe95f8ffe62ab308bd";

    const { calories, protein, fat, carbohydrate } = nutrientLimits;

    const url = `https://api.spoonacular.com/recipes/findByNutrients?maxCalories=${calories}&maxProtein=${protein}&maxFat=${fat}&maxCarbs=${carbohydrate}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNutrientLimits((prevLimits) => ({
      ...prevLimits,
      [name]: value,
    }));
  }

  return (
    <div className="SearchByNutrients">
      <h1 className="page-title">Optimize Your Meals: Find Delicious Recipes with Customized Nutrient Limits</h1>
      <p className="page-description">Set maximum calorie, protein, fat, and carbohydrate values to find meals that align with your dietary goals</p>
      <form onSubmit={handleSearch}>
        <input
          type="number"
          name="calories"
          placeholder="Max Calories"
          value={nutrientLimits.calories}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="protein"
          placeholder="Max Protein"
          value={nutrientLimits.protein}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="fat"
          placeholder="Max Fat"
          value={nutrientLimits.fat}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="carbohydrate"
          placeholder="Max Carbohydrate"
          value={nutrientLimits.carbohydrate}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default SearchByNutrients;
