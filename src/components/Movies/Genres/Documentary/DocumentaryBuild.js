import React from 'react';
import css from "../../movieStyle.module.css";
import {StarsRating} from "../../../StarsRating/StarsRating";
import {useNavigate} from "react-router-dom";

const DocumentaryBuild = ({documentary}) => {
    const {id,backdrop_path,title,vote_average} =documentary;
   const navigate = useNavigate()
    return (
        <div className={css.mainCard}>
            <div className={css.card} onClick={()=>{navigate(id.toString(),{state:{...documentary}})}}>
                <div className={css.genreInfo}></div>
                <div className={css.imgHolder}>
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="movie"/>
                </div>
                <div>{title}</div>
            </div>
            <hr/>
            <div className={css.ratingHolder}>
                <div>{vote_average}</div>
                <StarsRating/>
            </div>
        </div>
    );
};

export  {DocumentaryBuild};