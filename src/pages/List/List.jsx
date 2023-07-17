import React, { useEffect, useState } from 'react';
import './List.css';
import { recipesStore } from '../../store';
import ListItem from './ListItem/ListItem';
import { Outlet, useLocation } from 'react-router-dom';

const List = () => {

    const location = useLocation();

    const recipes = recipesStore((state) => state.recipes);
    const fetchRecipes = recipesStore((state) => state.fetchRecipes);

    let elements = [];
    let counter = 0;
    useEffect(() => {
        fetchRecipes()
    }, [fetchRecipes])
    
    recipes.forEach((element) => {
        if(counter <= 14) {
            elements.push(<ListItem key={element.id} {...element} />)
        }
        counter++
    });

    return (
        <div className='list row'>
            {/[0-9]/.test(location.pathname) ? <Outlet /> : <>{elements.length === 0 ? <h1 className='title'>Loading...</h1> : elements}</>}
        </div>
    );
};

export default List;