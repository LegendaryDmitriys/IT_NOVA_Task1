import React, { useEffect, useState } from 'react';
import { objects } from "../../../shared/api/data";
import CardImage from "./CardImage";
import "../ui/Gallery.css";
import FilterButton from "../ui/FilterButton";

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [filteredElements, setFilteredElements] = useState(objects.elements);

    const [page, setPage] = useState(1);
    const perPage = 9;
    const threshold = 100;

    useEffect(() => {
        if (filter === 'All') {
            setFilteredElements(objects.elements.slice(0, page * perPage));
        } else {
            setFilteredElements(objects.elements.filter(element => element.category_name === filter).slice(0, page * perPage));
        }

    }, [filter, page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - threshold
        ) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };


    }, []);

    const categories = ['All', ...new Set(objects.elements.map(element => element.category_name))];

    return (
        <div className="gallery-container">
            <FilterButton categories={categories} filter={filter} setFilter={setFilter} />
            <div className="images">
                {filteredElements.map((element, index) => (
                    <CardImage key={index} element={element} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
