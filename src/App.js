import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <Header />
      {routes}
    </HashRouter>
  );
}

export default App;
