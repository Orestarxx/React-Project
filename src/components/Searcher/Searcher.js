import React, { useState} from 'react';
import css from './searcherStyle.module.css'
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices";



const Searcher = () => {
    const [name, setName] = useState("");

    console.log(name);
    const dispatch = useDispatch()


    const handleInput = event => {
        setName(event.target.value);
    };

    const searchMovie = () => {
        dispatch(movieActions.searchMovie(name))



    };


    return (
        <div className={css.searchHolder}>

            <input className={css.searcher} type="text" onChange={handleInput} value={name}/>
            <button className={css.searchButt} onClick={searchMovie}>Search</button>



        </div>


    );
};

export {Searcher};