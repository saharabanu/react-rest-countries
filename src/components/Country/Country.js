import React from 'react';
import './Country.css';

const Country = (props) => {
const {name,flag,capital,population}= props.country
    return (
        <div className="country">
            <h2>Country:{name}</h2>
            <img src={flag} alt="" />
            <p>Capital: {capital}  Population: {population}</p>
        </div>
    );
};

export default Country;