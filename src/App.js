import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage"; 
import Footer from "./components/Footer";
import SearchRecipes from "./components/SearchRecipes";
import SearchByNutrients from "./components/SearchByNutrients";
import SearchByIngredients from "./components/SearchByIngredients";
import IngredientSearch from "./components/IngredientSearch";
import IngredientSubstitutes from "./components/IngredientSubstitutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="App__content">
          <Routes>
            <Route path="/exploreMeals" element={<HomePage />} /> 
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
