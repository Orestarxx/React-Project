import React from 'react';
import css from './searcherStyle.module.css'

const Searcher = () => {
    return (
        <form>
            <input type="text"/>
            <button>Search</button>
        </form>
    );
};

export  {Searcher};