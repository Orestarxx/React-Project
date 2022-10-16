import css from "../genreStyle.module.css";
import React from "react";

const ActionBuild = ({action}) => {
    const {title,backdrop_path} = action;


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

export {ActionBuild};