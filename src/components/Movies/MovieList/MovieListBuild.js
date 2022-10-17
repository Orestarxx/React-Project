import React from 'react';
import {useNavigate} from 'react-router-dom'

import css from '../movieStyle.module.css'
import {StarsRating} from "../../StarsRating/StarsRating";

const MovieListBuild = ({movie}) => {
    const {id,title,backdrop_path,vote_average} = movie;
   const navigate = useNavigate()

    return (
        <div className={css.mainCard} >
            <div className={css.card} onClick={()=>{navigate(id.toString(),{state:{...movie}})}}>
            <div className={css.genreInfo}></div>
           <div className={css.imgHolder}>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="movie"/>
           </div>
          <div className={css.titleHolder}>{title}</div>
            </div>
            <hr/>
            <div className={css.ratingHolder}>
                <div>{vote_average}</div>
                <StarsRating/>
            </div>


        </div>
    );
};

export {MovieListBuild};