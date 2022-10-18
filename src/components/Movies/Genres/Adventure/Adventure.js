import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {AdventureBuild} from "./AdvantureBuild";
import css from "../../movieStyle.module.css";


const Adventure = () => {
    const {genres: adventures} = useSelector(state => state.genreReducer)
    console.log(adventures);
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreAdventureId({page}))
    }, [page])
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {adventures.results?.map(adventure => <AdventureBuild key={adventure.id} adventure={adventure}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!adventures.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {Adventure};