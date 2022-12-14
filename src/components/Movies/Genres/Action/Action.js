import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {ActionBuild} from "./ActionBuild";
import css from "../../movieStyle.module.css";


const Action = () => {
    const {genres: action} = useSelector(state => state.genreReducer)
    console.log(action);
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(genreActions.getByGenreActionId({page}))


    }, [page])
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)

    return (
        <div className={css.holder}>
            {action.results?.map(action => <ActionBuild key={action.id} action={action}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!action.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {Action};