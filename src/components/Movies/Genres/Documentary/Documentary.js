import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";


import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {DocumentaryBuild} from "./DocumentaryBuild";
import css from "../../movieStyle.module.css";

const Documentary = () => {

    const {genres: documentaries} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreDocumentaryId({page}))
    }, [page])
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {documentaries.results?.map(documentary => <DocumentaryBuild documentary={documentary}
                                                                         key={documentary.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage}
                        disabled={!documentaries.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {Documentary};