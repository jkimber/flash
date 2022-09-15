import React from 'react';
import './Card.css'

export const Card = (props) => {

    const { binomial, common, binomialFirst, toggle, flip } = props;

    const getValue = () => {
        switch (toggle) {
            case 1:
                return binomialFirst
                    ? common.split(',').map(commonName => commonName.split(' ').map(word => word[0] + ' ').join('')).join(',')
                    : binomial.split(' ').map(word => word[0]).join(' ')
            case 2:
                return common.split(',').join(', ')
            default:
                return binomial;
        }
    }

    return (<div className='Card' onClick={flip}>{getValue()}</div>)
} 