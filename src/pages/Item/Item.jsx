import React from 'react';
import './Item.css';
import { useNavigate, useParams } from 'react-router-dom';
import { recipesStore } from '../../store';
import star_logo from './star_logo.svg';

const Item = () => {
    const navigation = useNavigate();

    const { recipeId } = useParams();

    const recipes = recipesStore((state) => state.recipes);

    let RECIPE = recipes[recipeId - 1];

    const backToList = ( e ) => {
        e.preventDefault();
        navigation(-1);
    }

    return (
        <div className='item column'>
            <div className='item-head row'>
                <button className='back-btn' onClick={(e) => backToList(e)}>back to list</button>
                <h1 className='title'>{RECIPE.name}</h1>
            </div>
            <div className='item-main row'>
                <img src={RECIPE.image_url} alt={RECIPE.name} className='item-img' />
                <div className='item-content column'>
                    <div className='tagline row'>
                        <img src={star_logo} alt='star logo' className='tagline-img' />
                        <p className='tagline-text'>{RECIPE.tagline}</p>
                    </div>
                    <p className='item-prop'><span>description: </span>{RECIPE.description}</p>
                    <p className='item-prop'><span>first brewed: </span>{RECIPE.first_brewed}</p>
                    <p className='item-prop'><span>abv: </span>{RECIPE.abv}</p>
                    <p className='item-prop'><span>ibu: </span>{RECIPE.ibu}</p>
                    <p className='item-prop'><span>target fg: </span>{RECIPE.target_fg}</p>
                    <p className='item-prop'><span>ebc: </span>{RECIPE.ebc}</p>
                    <p className='item-prop'><span>srm: </span>{RECIPE.srm}</p>
                    <p className='item-prop'><span>ph: </span>{RECIPE.ph}</p>
                    <p className='item-prop'><span>attenuation level: </span>{RECIPE.attenuation_level}</p>
                    <p className='item-prop'><span>volume: </span>{RECIPE.volume.value} {RECIPE.volume.unit}</p>
                    <p className='item-prop'><span>boil volume: </span>{RECIPE.boil_volume.value} {RECIPE.boil_volume.unit}</p>
                    <ul className='item-prop'><span>method:</span>
                        <li><span>mash temp:</span> {RECIPE.method.mash_temp[0].temp.value} {RECIPE.method.mash_temp[0].temp.unit}, <span>duration:</span> {RECIPE.method.mash_temp[0].duration}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Item;