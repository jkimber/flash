import React from 'react';
import './Card.css'

export const Card = ({ binomial, common, imgFilename, toggle, onClick, togglePicture }) =>
    <div className='Card' onClick={onClick}>
        {togglePicture && imgFilename && imgFilename !== 'NULL' && <img alt={imgFilename} src={process.env.PUBLIC_URL + '/img/' + imgFilename}></img>}
        {togglePicture && imgFilename && imgFilename === 'NULL' && <div className='Card-EmptyImage'></div>}
        {!togglePicture && <div className='Card-EmptyImage'></div>}
        <div className='Card-Text'>
            {toggle ? common.map(name => <p key={name}>{name}</p>) : <p>{binomial}</p>}
        </div>
    </div>
