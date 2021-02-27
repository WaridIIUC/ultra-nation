import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, capital, currencies, languages, flag } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="design">
            <div className="country">
                <img src={flag} alt="" />
                <h4>{name}</h4>
                <p>Population: {population}</p>
                <p>Capital: {capital}</p>
                <p>Currency: {currencies[0].name}</p>
                <p>Language: {languages[0].name}</p>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;