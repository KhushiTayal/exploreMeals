import React from "react";
import Meal from "./Meal";
import "./MealList.css";

function MealList({ mealData }) {
  return (
    <div className="MealList">
      {mealData.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default MealList;
