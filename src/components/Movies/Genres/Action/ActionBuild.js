import css from "../../movieStyle.module.css";
import React from "react";
import {StarsRating} from "../../../StarsRating/StarsRating";
import {useNavigate} from "react-router-dom";

const ActionBuild = ({action}) => {
    const {id,title,backdrop_path,vote_average} = action;
   const navigate = useNavigate()


    return (
        <div className={css.mainCard}>
            <div className={css.card} onClick={()=>{navigate(id.toString(),{state:{...action}})}}>
                <div className={css.genreInfo}>{}</div>
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

export {ActionBuild};