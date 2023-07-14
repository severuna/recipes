import React, { useState } from 'react';
import './Hint.css';
import hint_logo from './hint_logo.svg';

const Hint = () => {

    const [view, setView] = useState('none');

    const showHint = ( e ) => {
        e.preventDefault();
        let currentView = view;
        if(currentView === 'none') {
            setView('visible')
        } else {
            setView('none')
        }
    }
    return (
        <div className='hint column'>
            <img src={hint_logo} alt='hint logo' className='hint-logo' onClick={(e) => showHint(e)}/>
            <div className={`hint-content column ${view}`}>
                <p><span>1.</span> Click the right mouse button - choose a recipe (it is possible to choose several options).</p>
                <p><span>2.</span> Click the right mouse button again - deselect this recipe (it is possible to select several options).</p>
                <p><span>3.</span> Click the left mouse button - see the details of the recipe.</p>
            </div>
        </div>
    );
};

export default Hint;