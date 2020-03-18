import React from "react";
import NavbarApp from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <ShoppingList />
    </div>
  );
}

export default App;
