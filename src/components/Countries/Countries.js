import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
       
    },[])
    return (
        <div>
            <h1>Rest Countries</h1>
           <div className="country-container"> 
           {
                countries.map(country=><Country 
                    key ={country.name}
                    country={country} >

                    </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;
