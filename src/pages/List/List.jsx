import React, {useEffect} from 'react';
import './List.css';
import { recipesStore } from '../../store';
import ListItem from './ListItem/ListItem';
import { Outlet, useLocation } from 'react-router-dom';

const List = () => {

    const location = useLocation();

    const recipes = recipesStore((state) => state.recipes);
    const fetchRecipes = recipesStore((state) => state.fetchRecipes);
    
    useEffect(() => {
        fetchRecipes()
    }, [fetchRecipes])

    let elements = [];

    recipes.forEach((element) => {
        elements.push(<ListItem key={element.id} {...element} />)
    });

    return (
        <div className='list row'>
            {/[0-9]/.test(location.pathname) ? <Outlet /> : <>{elements}</>}
        </div>
    );
};

export default List;