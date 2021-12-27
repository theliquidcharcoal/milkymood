import React from "react";
import { GlobalStyle } from "./styles";



const App = () => {

  const message = (name) => {
    return `${name} is a teacher at SuperHi.`
  }

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Hello! World</h1>
      <h2>{message `Parth`}</h2>
    </div>
  );
}

export default App;
