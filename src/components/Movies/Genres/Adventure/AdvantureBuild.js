import React from 'react';
import css from "../../movieStyle.module.css";
import {StarsRating} from "../../../StarsRating/StarsRating";

const AdventureBuild = ({adventure}) => {
    const {title,backdrop_path,vote_average} = adventure;
    return (
        <div className={css.mainCard}>
            <div className={css.card}>
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

export {AdventureBuild};