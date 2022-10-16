import React from 'react';
import css from "../../MovieList/movieStyle.module.css";

const WesternBuild = () => {
    return (
        <div className={css.card}>
            <div className={css.genreInfo}></div>
            <div className={css.imgHolder}>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt=""/>
            </div>
            <div>{title}</div>
        </div>
    );
};

export  {WesternBuild};