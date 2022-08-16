import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
          <h1>Moves Page</h1>
          {movies.map((movie) => {
              <div>
                {movie.}
              </div>
          })}
         </div>;
}

export default Movies;
