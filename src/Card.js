import React from 'react';
import './Card.css'

export const Card = ({ binomial, common, imgFilename, toggle, onClick, togglePicture }) =>
    <div className='Card' onClick={onClick}>
        {togglePicture && <img alt={imgFilename} src={process.env.PUBLIC_URL + '/img/' + binomial.split(' ')[0] + '_' + binomial.split(' ')[1]}></img>}
        {!togglePicture && <div className='Card-EmptyImage'></div>}
        <div className='Card-Text'>
            {toggle ? common.map(name => <p key={name}>{name}</p>) : <p>{binomial}</p>}
        </div>
    </div>
