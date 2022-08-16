import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return( 
        <Switch>
          <Route to="/movies">
              <Movies />
          </Route>
          <Route to="/directors">
              <Directors />
          </Route>
          <Route to="/actors">
              <Actors />
          </Route>
          <Route to="/">
              <Home />
          </Route>

  
        </Switch>
          
          )}

export default App;
