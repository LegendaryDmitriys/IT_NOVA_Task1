import React from 'react';
import Button from "./Button /Button";
import "./FilterButton.css"


const FilterButton = ({ categories, filter, setFilter }) => {
    return (
        <div className="filters">
            {categories.map(category => (
                <Button
                    key={category}
                    className={filter === category ? 'active' : ''}
                    onClick={() => setFilter(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default FilterButton;