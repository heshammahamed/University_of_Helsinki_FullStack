
import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ countryName }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Only fetch data if there is exactly one country name
    if (countryName.length === 1) {
        // to delete the return the country state to default
        setCountry(null)
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName[0]}`)
        .then(response => {
          setCountry(response.data); // Set the fetched data in state
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
    return countryName.map(c => <p key={c}>{c}</p>);
  }

  // Render a list of country names if more than one is provided
  if (countryName.length == 1) {
    return (
        <div>
            {
                country ? (
                    <>
                        <h1>{country.name.common}</h1>
                        <p>{country.capital ? country.capital[0] : "No capital available"}</p>
                    </>
                )
                : (<p>loading ...</p>)
            }
        </div>
    )

  }
};

export default Countries;