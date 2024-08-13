import WeatherCondition from "./weather";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ countryName , handleFunction}) => {
  const [countryS, setScountry] = useState(null);
  const [position, setPosition] = useState([]);


  useEffect(() => {
    // Only fetch data if there is exactly one country name
    if (countryName.length === 1) {
        // to delete the return the country state to default
        setScountry(null)
        setPosition([])
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName[0]}`)
        .then(response => {
          setScountry(response.data); // Set the fetched data in state
          setPosition(response.data.latlng)
        })
    }

    // why i dont set it to empty array
    // cause even we render the effect is run after just first render
    // so when i pass new data to the componemt then the effect is re excute 
  }, [countryName]); // The effect runs every time countryName changes cause if that is not happen the 


  // Render null if no country name is provided
  if (countryName.length === 0) {
    return null;
  }

  // Render a list of country names if more than one is provided
  if (countryName.length > 1) {
    return countryName.map(c => <p key={c}>{c} <button onClick={handleFunction}>shown</button></p>);
  }

  // Render a list of country names if more than one is provided
  if (countryName.length == 1) {
    return (
        <div>
            {
                countryS ? (
                    <>
                        <h1>{countryS.name.common}</h1>
                        <p>{countryS.capital ? countryS.capital[0] : "No capital available"}</p>
                        <h3>languges : </h3>
                        <ul>
                          {Object.keys(countryS.languages).map(l=> <li key = {countryS.languages[l]}>{countryS.languages[l]}</li>)}
                        </ul>
                        <img src={countryS.flags.png} alt={countryS.flags.alt}/>
                        <WeatherCondition location = {position}/>
                    </>
                )
                : (<p>loading ...</p>)
            }
        </div>
    )

  }
};

export default Countries;