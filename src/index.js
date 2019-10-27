import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

      // in progress small update
      // index file


function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// npm start is the command to see 
// currently will only show the code sandbox startup page

// this is now being done as a group project and all effort towards a chess application made using react will now go towards the final project for the 401 advanced javascript course

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
