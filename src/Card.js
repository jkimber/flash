import React from 'react';
import './Card.css'

export const Card = ({ binomial, common, imgFilename, toggle, onClick }) =>
    <div className='Card' onClick={onClick}>
        {imgFilename && imgFilename !== 'NULL' && <img alt={imgFilename} src={process.env.PUBLIC_URL + '/img/' + imgFilename}></img>}
        {imgFilename && imgFilename === 'NULL' && <div className='Card-EmptyImage'></div>}
        <div className='Card-Text'>
            {toggle ? common.map(name => <p key={name}>{name}</p>) : <p>{binomial}</p>}
        </div>
    </div>
