import React from "react";
import { NavLink } from "react-router-dom";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function NavBar() {
  return ( <div>
            <NavLink to="/">
                <Home />
            </NavLink>
            <NavLink to="/movies">
                <Movies />
            </NavLink>
            <NavLink to="/directors">
              <Directors />
            </NavLink>
            <NavLink to="/actors">
              <Actors />
            </NavLink>
          </div> )
}

export default NavBar;
