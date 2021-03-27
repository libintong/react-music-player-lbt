import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Recommend from "./pages/recommend";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/recommend" component={Recommend}></Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
