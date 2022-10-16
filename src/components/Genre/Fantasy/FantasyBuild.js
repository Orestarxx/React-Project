import React from 'react';
import css from "../genreStyle.module.css";

const FantasyBuild = ({fantasy}) => {
    const {backdrop_path,title} =fantasy;
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

export  {FantasyBuild};