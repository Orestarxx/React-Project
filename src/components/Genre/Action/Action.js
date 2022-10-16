import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {ActionBuild} from "./ActionBuild";



const Action = () => {
   const {genres:action} = useSelector(state => state.genreReducer)
    console.log(action);
    const dispatch = useDispatch()
    useEffect(() =>{
     dispatch(genreActions.getByGenreId(genre.Action))
    },[])
    return (
        <div>
            {action.results?.map(action => <ActionBuild key={action.id} action={action}/>)}
        </div>
    );
};

export {Action};