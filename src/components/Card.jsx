import React from 'react';

const Card = (props) => {
    const {country} = props;

    const numberFormat = (x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return (
        <li className="card">
            <img src={country.flag} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>Name : {country.name}</li>
                    <li>Capital : {country.capital}</li>
                    <li>Pop. : {numberFormat(country.population)} habitants</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;