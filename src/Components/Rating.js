import React from 'react'
import StarRatingComponent from "react-rating-stars-component"
import {useState} from 'react'

function Rating() {
    const [Rating, setRating] = useState(1);
    const onStarClick =(nextValue,prevValue,name) =>{
    setRating(nextValue);
};

    return (
        <div>
            <StarRatingComponent
                starCount={5}
                value={Rating}
                onStarClick={onStarClick}
                /> 
            
        </div>
    )
}

export default Rating
