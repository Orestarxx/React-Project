import React from 'react';
import {useNavigate} from "react-router-dom";

import css from "../../movieStyle.module.css";
import {StarsRating} from "../../../StarsRating/StarsRating";

const ScienceFictionBuild = ({science}) => {
    const {id,backdrop_path,title,vote_average} =science;
   const navigate = useNavigate()
    return (
        <div className={css.mainCard}>
            <div className={css.card} onClick={()=>{navigate(id.toString(),{state:{...science}})}}>
                <div className={css.badge}>Science Fiction</div>
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

export  {ScienceFictionBuild};