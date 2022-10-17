import React, {useEffect, useState} from 'react';
import css from './searcherStyle.module.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";


const Searcher = () => {
    const [name, setName] = useState(" ");
   const {movies} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    useEffect(() =>{

    },[])

    const handleInput = event => {
        setName(event.target.value);
    };

    const searchMovie = () => {
        dispatch(movieActions.searchMovie(name))
    };


    return (
        <div>
            <input className={css.searcher} type="text"  onChange={handleInput}/>
            <button onClick={searchMovie}>Search</button>
        </div>


    );
};

export  {Searcher};