import React from 'react';

import css from './movieStyle.module.css'

const MovieListBuild = ({movie}) => {
    const {title,backdrop_path} = movie;
    return (
        <div className={css.card}>
           <div className={css.imgHolder}>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt=""/>
           </div>
          <div>{title}</div>


        </div>
    );
};

export {MovieListBuild};