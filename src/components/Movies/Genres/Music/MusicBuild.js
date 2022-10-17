import React from 'react';
import css from "../../movieStyle.module.css";
import {StarsRating} from "../../../StarsRating/StarsRating";

const MusicBuild = ({music}) => {
    const {backdrop_path,title,vote_average} = music;
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

export  {MusicBuild};