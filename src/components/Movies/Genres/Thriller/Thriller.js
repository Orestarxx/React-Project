import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {ThrillerBuild} from "./ThrillerBuild";
import css from "../../movieStyle.module.css";


const Thriller = () => {
    const {genres: thrillers} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreThrillerId({page}))
    }, [page]);
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {thrillers.results?.map(thriller => <ThrillerBuild thriller={thriller} key={thriller.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!thrillers.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {Thriller};