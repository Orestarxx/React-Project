import React from 'react';

import css from '../../movieDetailsStyle.module.css'

const MovieDetailsBuild = ({movie}) => {
    const {overview,poster_path,original_language,title,release_date,popularity} = movie;
    return (
        <div>
            <div className={css.infoHolder}>
                <div className={css.posterHolder}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                </div>
               <div className={css.movieInfo}>
                   <div><h2>{title}</h2></div>
                   <div><h4>{overview}</h4></div>
                   <div> <b>Original language: </b>{original_language}</div>
                   <div><b>Release date: </b>{release_date}</div>
                   <div><b>Popularity: </b>{popularity}</div>
               </div>
            </div>


        </div>
    );
};

export  {MovieDetailsBuild};