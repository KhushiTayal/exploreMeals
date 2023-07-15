import React, { useState } from "react";
import MealList from "./MealList";
import "./SearchByIngredients.css";

function SearchByIngredients() {
  const [ingredients, setIngredients] = useState("");
  const [number, setNumber] = useState(10);
  const [limitLicense, setLimitLicense] = useState(true);
  const [ranking, setRanking] = useState(1);
  const [ignorePantry, setIgnorePantry] = useState(true);
  const [mealData, setMealData] = useState(null);

  function handleSearch(e) {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    

    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${number}&limitLicense=${limitLicense}&ranking=${ranking}&ignorePantry=${ignorePantry}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }

  return (
    <div className="SearchByIngredients">
      <h1 className="page-title">Whip Up Delicious Recipes with Your Pantry Staples"</h1>
      <p className="page-description">Quickly search and discover recipes based on the ingredients you have in your pantry. Cook delicious meals with ease!</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Number of Recipes"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="input-field"
        />
        <label className="ranking-label">
          Ranking:
          <select
            value={ranking}
            onChange={(e) => setRanking(e.target.value)}
            className="ranking-select"
          >
            <option value="1">Maximize Used Ingredients</option>
            <option value="2">Minimize Missing Ingredients</option>
          </select>
        </label>
        <button type="submit" className="search-button">Search</button>
      </form>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default SearchByIngredients;
