import React from 'react';
import './Item.css';
import { useNavigate } from 'react-router-dom';

const Item = () => {
    const navigation = useNavigate();

    const backToList = ( e ) => {
        e.preventDefault();
        navigation(-1);
    }

    return (
        <div className='item column'>
            <button onClick={(e) => backToList(e)}>back</button>
            item
        </div>
    );
};

export default Item;