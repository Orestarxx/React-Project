import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'
import css from './starRatingStyle.module.css'

const StarsRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className={css.starHolder}>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1
                return (<label>
                    <input className={css.inputStar} type="radio" name="rating" value={ratingValue}
                           onClick={() => setRating(ratingValue)}/>

                    <FaStar className={css.star} color={ratingValue <= (hover ||rating) ? "#ffc107" : "#e4e5e9"} size={30}
                            onMouseEnter={() =>setHover(ratingValue)}
                            onMouseLeave={() =>setHover(null)}/></label>)
            })}
        </div>
    );
};

export {StarsRating};