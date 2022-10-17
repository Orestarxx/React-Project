import React from 'react';
import {useLocation} from "react-router-dom";
import {MovieDetailsBuild} from "./MovieDetailsBuild";

const MovieDetails = () => {
   const {state:movie} = useLocation()
    console.log(movie);
    return (
        <div>
            <MovieDetailsBuild key={movie.id} movie={movie}/>
        </div>
    );
};

export  {MovieDetails};