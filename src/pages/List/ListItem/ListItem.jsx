import React, { useState } from 'react';
import './ListItem.css';
import { useNavigate } from 'react-router-dom';
import { recipesStore } from '../../../store';

const ListItem = ( props ) => {
    const [width, setWidth] = useState({});
    const setCheckedArr = recipesStore((state) => state.setCheckedArr)

    const navigation = useNavigate();

    const setImageSize = (e) => {
        e.preventDefault();
        if(e.target.height <= 888) {
            setWidth({
                width: '150px',
                height: '330px'
            });
        } else {
            setWidth({
                width: '70px',
                height: '330px'
            });
        }
    }

    const [check, setCheck] = useState({
        id: props.id,
        isChecked: false
    })

    const setLocation = ( e ) => {
        e.preventDefault();
        if(e.button === 0) {
            navigation(`/recipes/${props.id}`)
        }
    }

    const checkRecipe = ( e ) => {
        e.preventDefault();
        if(!check.isChecked) {
            setCheck({...check, isChecked: true})
            setCheckedArr({...props})
        } else {
            setCheck({...check, isChecked: false})
            setCheckedArr({...props})
        }
    }

    return (
        <div className={`list-item row ${!check.isChecked ? 'uncheck' : 'check'}`} onClick={(e) => setLocation(e)} onContextMenu={(e) => checkRecipe(e)}>
            <img src={props.image_url} alt={props.name} onLoad={(e) => setImageSize(e)} className='list-item__img' style={width}/>
            <div className='list-item__content column'>
                <div className='column'>
                    <h2 className='list-item__title'>{props.name}</h2>
                    <p className='list-item__description'>{props.description.length > 100 ? props.description.substr(0, 200) + '...' : props.description}</p>
                    <p className='list-item__tagline'><span>TAGLINE:</span> {props.tagline}</p>
                </div>
                <div className='list-item__details row'>
                    <p><span>IBU: </span>{props.ibu}</p>
                    <p><span>ABV: </span>{props.abv}</p>
                    <p><span>PH: </span>{props.ph}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;