import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./HomePage"; // Import the HomePage component
import Footer from "./Footer";
import SearchRecipes from "./SearchRecipes";
import SearchByNutrients from "./SearchByNutrients";
import SearchByIngredients from "./SearchByIngredients";
import IngredientSearch from "./IngredientSearch";
import IngredientSubstitutes from "./IngredientSubstitutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="App__content">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Set HomePage as the homepage */}
            <Route path="/search-recipes" element={<SearchRecipes />} />
            <Route path="/search-by-nutrients" element={<SearchByNutrients />} />
            <Route path="/search-by-ingredients" element={<SearchByIngredients />} />
            <Route path="/ingredient-search" element={<IngredientSearch />} />
            <Route path="/ingredient-substitutes" element={<IngredientSubstitutes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
