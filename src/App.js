import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data";

const App = () => {

  const [tours, setTours]=useState(data);

  return (
    <div>
      <h2>Plan with love</h2>

      <Tours tours={tours}></Tours>
    </div> 
  )
};

export default App;
