import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

function HomePage() {
  return (
    <div className="HomePage">
      <h1>Welcome to Meal Planner App</h1>
      <p>Plan and discover delicious meals for every occasion!</p>
      <div className="CallToAction">
        <Link to="/search-by-ingredients" className="Button">Search by Ingredients</Link>
      </div>
      <div className="Features">
        <div className="Feature">
          <h2>Explore Recipes</h2>
          <p>Discover a wide range of recipes from various cuisines and dietary preferences.</p>
          <Link to="/search-recipes" className="Button">Get Started</Link>
        </div>
        <div className="Feature">
          <h2>Find Recipes by Ingredients</h2>
          <p>Search for recipes based on the ingredients you have in your kitchen.</p>
          <Link to="/search-by-ingredients" className="Button">Get Started</Link>
        </div>
        <div className="Feature">
          <h2>Search by Nutrients</h2>
          <p>Find recipes that meet your specific nutrient requirements and dietary goals.</p>
          <Link to="/search-by-nutrients" className="Button">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
