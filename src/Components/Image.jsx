import React from 'react';

import recipeImg from "../assets/mainImg.jpeg"

const Image = () => {
    return (
        <div>
            <img className='rounded-2xl' src={recipeImg} alt="" />
        </div>
    );
};

export default Image;