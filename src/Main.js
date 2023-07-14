import React from 'react';
import './Main.css';
import {Route, Routes} from 'react-router-dom';
import List from './pages/List/List';
import Item from './pages/Item/Item';

const Main = () => {
    return (
        <main className='main column'>
            <h1 className='title'>Beer recipes</h1>
            <Routes>
                <Route path='/recipes/' element={<List />}>
                    <Route path=':recipeId' element={<Item />}/>
                </Route>
            </Routes>
        </main>
    );
};

export default Main;