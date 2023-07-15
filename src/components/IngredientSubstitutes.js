import React, { useState } from "react";
import "./IngredientSubstitutes.css";

function IngredientSubstitutes() {
  const [ingredientName, setIngredientName] = useState("");
  const [substitutes, setSubstitutes] = useState([]);
  const [message, setMessage] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    

    const url = `https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredientName}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSubstitutes(data.substitutes);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching substitutes:", error);
      });
  }

  return (
    <div className="IngredientSubstitutes">
      <h2>Get Ingredient Substitutes</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Ingredient Name"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {message && <p>{message}</p>}
      {substitutes.length > 0 && (
        <ul>
          {substitutes.map((substitute, index) => (
            <li key={index}>{substitute}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IngredientSubstitutes;
