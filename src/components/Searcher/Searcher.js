import React from 'react';
import css from './searcherStyle.module.css'

const Searcher = () => {
    return (
        <form>
            <input className={css.searcher} type="text"/>
            <button>Search</button>
        </form>
    );
};

export  {Searcher};