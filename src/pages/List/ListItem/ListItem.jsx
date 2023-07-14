import React, { useState } from 'react';
import './ListItem.css';

const ListItem = ( props ) => {
    const [width, setWidth] = useState({});

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

    return (
        <div className='list-item row'>
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