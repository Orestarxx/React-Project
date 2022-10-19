import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {AnimationBuild} from "./AnimationBuild";
import css from "../../movieStyle.module.css";


const Animation = () => {
    const {genres: animations} = useSelector(state => state.genreReducer)
    console.log(animations);
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreAnimationId({page}))
    }, [page])
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {animations.results?.map(animation => <AnimationBuild animation={animation} key={animation.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!animations.results?.length}>Next</button>
            </div>
        </div>
    );
};

export {Animation};