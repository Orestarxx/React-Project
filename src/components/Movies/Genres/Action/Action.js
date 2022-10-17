import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {ActionBuild} from "./ActionBuild";
import css from "../../movieStyle.module.css";
import {useState} from "react";



const Action = () => {
   const {genres:action} = useSelector(state => state.genreReducer)
    console.log(action);
    const dispatch = useDispatch()
    const [page,setPage] = useState(1)
    useEffect(() =>{
     dispatch(genreActions.getByGenreId(genre.Action))
    },[dispatch])
    return (
        <div className={css.holder}>
            {action.results?.map(action => <ActionBuild key={action.id} action={action}/>)}
        </div>
    );
};

export {Action};