import React, { useState, useEffect } from "react";
import styles from "./IngredientSearch.module.css";

function IngredientSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [number, setNumber] = useState(10);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

      const url = `https://api.spoonacular.com/food/ingredients/search?query=${searchInput}&number=${number}&sort=${sort}&sortDirection=${sortDirection}&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    if (searchInput !== "") {
      fetchIngredients();
    }
  }, [searchInput, sort, sortDirection, number]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults([]);
    setSearchInput(e.target.elements.searchInput.value);
  };

  return (
    <div className={styles.IngredientSearch}>
      <h1 className="page-title">Discover Simple Whole Foods</h1>
      <p className="page-description">Search for simple whole foods like fruits, vegetables, nuts, grains, meat, fish, and dairy!</p>
      <form onSubmit={handleSearch} className={styles.form}>
        <label>
          Search Ingredients:
          <input type="text" name="searchInput" />
        </label>
        <label>
          Number of Results:
          <input
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </label>
        <label>
          Sort By:
          <select name="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="calories">Calories</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>
        <label>
          Sort Direction:
          <select
            name="sortDirection"
            value={sortDirection}
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {searchResults.length > 0 && (
        <ul className={styles.IngredientList}>
          {searchResults.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}
              {ingredient.image && <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IngredientSearch;
