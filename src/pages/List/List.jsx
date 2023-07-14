import React, {useEffect} from 'react';
import './List.css';
import { recipesStore } from '../../store';
import ListItem from './ListItem/ListItem';

const List = () => {
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
            {elements}
        </div>
    );
};

export default List;