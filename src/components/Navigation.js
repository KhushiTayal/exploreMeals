import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; 

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/search-recipes">Search Recipes</Link>
        </li>
        <li>
          <Link to="/search-by-nutrients">Search by Nutrients</Link>
        </li>
        <li>
          <Link to="/search-by-ingredients">Search by Ingredients</Link>
        </li>
        <li>
          <Link to="/ingredient-search">Ingredient Search</Link>
        </li>
        <li>
          <Link to="/ingredient-substitutes">Ingredient Substitutes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
