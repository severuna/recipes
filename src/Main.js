import React from 'react';
import './Main.css';
import {Route, Routes} from 'react-router-dom';
import List from './pages/List/List';
import Item from './pages/Item/Item';
import Hint from './components/Hint/Hint';
import DeleteBtn from './components/DeleteBtn/DeleteBtn';

const Main = () => {
    return (
        <main className='main column'>
            <div className='main-head row'>
                <DeleteBtn />
                <h1 className='title'>Beer recipes</h1>
                <Hint />
            </div>
            <Routes>
                <Route path='/recipes/' element={<List />}>
                    <Route path=':recipeId' element={<Item />}/>
                </Route>
            </Routes>
        </main>
    );
};

export default Main;