import React from 'react';
import Country from '../Country/Country';
import './countryList.css';

const CountryList = ({stats}) => {
    return (
        <div className="countryList">
            {
                stats.map(country => <Country key={country.CountryCode} stats={country}/>)
            }
        </div>
    )
}

export default CountryList;