import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature


   // 1. Create state for dark mode
 const [isDarkMode, setIsDarkMode] = useState(false); // starts in light mode

  // 2. Set up class based on state
  const appClass = isDarkMode ? "App dark" : "App light";


  // 3. Create toggle function
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }



  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
