import React from 'react';
import './DeleteBtn.css';
import { recipesStore } from '../../store';

const DeleteBtn = () => {
    const deleteItems = recipesStore((state) => state.deleteItems)
    return (
        <button className={`delete-btn`} onClick={deleteItems}>
            delete
        </button>
    );
};

export default DeleteBtn;