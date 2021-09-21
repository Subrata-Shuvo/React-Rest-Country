import React from 'react';
import './Country.css';

const Country = (props) => {
   const {name, flag, capital, population, region } = props.country;


    return (
        <div className="country bg-success">
            <h4>This is: {name} </h4>
            <img src={flag} alt="" />
            <p>Capital is: {capital}</p>
            <small>Reginon: {region}</small>
            <p>Population is: {population}</p>
        </div>
    );
};

export default Country;