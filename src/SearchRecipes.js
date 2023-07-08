import React, { useState } from "react";
import MealList from "./MealList";
import "./SearchRecipes.css";

function SearchRecipes() {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [intolerances, setIntolerances] = useState([]);
  const [mealData, setMealData] = useState(null);

  function handleSearch(e) {
    e.preventDefault();

    const apiKey = "515a5db176df44fe95f8ffe62ab308bd";

    const intolerancesString = intolerances.join(",");

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerancesString}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }

  return (
    <div className="SearchRecipes">
      <h1 className="page-title">Discover Delicious Recipes</h1>
      <p className="page-description">Explore a wide range of recipes and find your next favorite dish!</p>
      <form onSubmit={handleSearch}>
        <div className="search-form">
          <input
            type="text"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
            <option value="">Select Cuisine</option>
            <option value="african">Indian</option>
            <option value="asian">Asian</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            {/* Add all cuisine options */}
          </select>
          <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="">Select Diet</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="lacto-vegetarian">Lacto-Vegetarian</option>
            {/* Add all diet options */}
          </select>
          <select
            multiple
            value={intolerances}
            onChange={(e) =>
              setIntolerances(Array.from(e.target.selectedOptions, (option) => option.value))
            }
          >
            <option value="">Select Intolerances</option>
            <option value="dairy">Dairy</option>
            <option value="egg">Egg</option>
            <option value="gluten">Gluten</option>
            <option value="grain">Grain</option>
            {/* Add all intolerance options */}
          </select>
          <button type="submit">Search</button>
        </div>
      </form>
      {mealData && (
        <div className="meal-list-container">
          <MealList mealData={mealData} />
        </div>
      )}
    </div>
  );
}

export default SearchRecipes;
