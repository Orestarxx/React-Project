import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {ScienceFictionBuild} from "./Science_FictionBuild";
import css from "../../movieStyle.module.css";


const ScienceFiction = () => {
    const {genres: science_fictions} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreScienceFictionId({page}))
    }, [page]);
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {science_fictions.results?.map(science => <ScienceFictionBuild science={science} key={science.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage}
                        disabled={!science_fictions.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {ScienceFiction};