import React from 'react';

const MovieListBuild = ({movie}) => {
    const {title} = movie;
    return (
        <div>
           <div>{title}</div>
        </div>
    );
};

export {MovieListBuild};