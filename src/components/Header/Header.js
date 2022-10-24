import React from 'react';
import {Link} from "react-router-dom";

import css from './headerStyle.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <ul>
                <li><Link to={'allMovies'}>All Movies</Link></li>
                <li><Link to={'actions'}>Actions</Link></li>
                <li><Link to={'adventures'}>Adventures</Link></li>
                <li><Link to={'animations'}>Animations</Link></li>
                <li><Link to={'comedies'}>Comedies</Link></li>
                <li><Link to={'crimes'}>Crimes</Link></li>
                <li><Link to={'documentaries'}>Documentaries</Link></li>
                <li><Link to={'dramas'}>Dramas</Link></li>
                <li><Link to={'families'}>Families</Link></li>
                <li><Link to={'fantasies'}>Fantasies</Link></li>
                <li><Link to={'histories'}>Histories</Link></li>
                <li><Link to={'horrors'}>Horrors</Link></li>
                <li><Link to={'musics'}>Musics</Link></li>
                <li><Link to={'mysteries'}>Mysteries</Link></li>
                <li><Link to={'romances'}>Romances</Link></li>
                <li><Link to={'scienceFictions'}>Science Fictions</Link></li>
                <li><Link to={'thrillers'}>Thrillers</Link></li>
                <li><Link to={'tvMovies'}>TV Movies</Link></li>
                <li><Link to={'wars'}>Wars</Link></li>
                <li><Link to={'westerns'}>Westerns</Link></li>
            </ul>
        </div>
    );
};

export {Header};