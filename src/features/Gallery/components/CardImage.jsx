import React from 'react';

function CardImage({ element }) {
    return (
        <div className="image-container">
            <img src={element.img_path} alt={element.category_name}/>
        </div>
    );
}

export default CardImage;