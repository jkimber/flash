import React from 'react';
import './Card.css'

export const Card = ({ binomial, common, toggle, onClick }) =>
    <div className='Card' onClick={onClick}>
        {toggle ? common.map(name => <p key={name}>{name}</p>) : <p>{binomial}</p>}
    </div>
