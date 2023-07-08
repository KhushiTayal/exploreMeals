import React, { useState } from "react";

function ShoppingList({ recipes }) {
  const [shoppingList, setShoppingList] = useState([]);

  // Function to generate the shopping list
  const generateShoppingList = () => {
    const allIngredients = recipes.reduce((acc, recipe) => {
      acc.push(...recipe.ingredients);
      return acc;
    }, []);

    // Remove duplicates from the ingredients list
    const uniqueIngredients = Array.from(new Set(allIngredients));

    setShoppingList(uniqueIngredients);
  };

  // Function to remove an item from the shopping list
  const removeItem = (index) => {
    const updatedList = [...shoppingList];
    updatedList.splice(index, 1);
    setShoppingList(updatedList);
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <button onClick={generateShoppingList}>Generate List</button>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
