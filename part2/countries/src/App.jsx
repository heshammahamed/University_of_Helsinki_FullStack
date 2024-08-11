import { useState , useEffect} from 'react'
import axios from 'axios'
import countrieServices from './services/countrieServices';
import Countries from './components/countries';


function App() {

  const [country , setCountry] = useState('')
  const [displayCountry , setDisplayCountery] = useState([])
  const [countriesAlpha , setCountriesAlpha] = useState([])


  function orgnize (allCountries) {
    let countriesAlpha =  {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      g: [],
      h: [],
      i: [],
      j: [],
      k: [],
      l: [],
      m: [],
      n: [],
      o: [],
      p: [],
      q: [],
      r: [],
      s: [],
      t: [],
      u: [],
      v: [],
      w: [],
      x: [],
      y: [],
      z: []
    }
    for (let i = 0 ; i < allCountries.length ; i++) {
      let firstLetter = allCountries[i][0].toLowerCase();
      if (firstLetter == "a") {
       countriesAlpha.a.push(allCountries[i]);
       continue
      }
      if (firstLetter == "b") {
       countriesAlpha.b.push(allCountries[i]);
       continue
      }
      if (firstLetter == "c") {
       countriesAlpha.c.push(allCountries[i]);
       continue
      }
      if (firstLetter == "d") {
       countriesAlpha.d.push(allCountries[i]);
       continue
      }
      if (firstLetter == "e") {
       countriesAlpha.e.push(allCountries[i]);
       continue
      }
      if (firstLetter == "f") {
       countriesAlpha.f.push(allCountries[i]);
       continue
      }
      if (firstLetter == "g") {
       countriesAlpha.g.push(allCountries[i]);
       continue
      }
      if (firstLetter == "h") {
       countriesAlpha.h.push(allCountries[i]);
       continue
      }
      if (firstLetter == "i") {
       countriesAlpha.i.push(allCountries[i]);
       continue
      }
      if (firstLetter == "j") {
       countriesAlpha.j.push(allCountries[i]);
       continue
      }
      if (firstLetter == "k") {
       countriesAlpha.k.push(allCountries[i]);
       continue
      }
      if (firstLetter == "l") {
       countriesAlpha.l.push(allCountries[i]);
       continue
      }
      if (firstLetter == "m") {
       countriesAlpha.m.push(allCountries[i]);
       continue
      }
      if (firstLetter == "n") {
       countriesAlpha.n.push(allCountries[i]);
       continue
      }
      if (firstLetter == "o") {
       countriesAlpha.o.push(allCountries[i]);
       continue
      }
      if (firstLetter == "p") {
       countriesAlpha.p.push(allCountries[i]);
       continue
      }
      if (firstLetter == "q") {
       countriesAlpha.q.push(allCountries[i]);
       continue
      }
      if (firstLetter == "r") {
       countriesAlpha.r.push(allCountries[i]);
       continue
      }
      if (firstLetter == "s") {
       countriesAlpha.s.push(allCountries[i]);
       continue
      }
      if (firstLetter == "t") {
       countriesAlpha.t.push(allCountries[i]);
       continue
      }
      if (firstLetter == "u") {
       countriesAlpha.u.push(allCountries[i]);
       continue
      }
      if (firstLetter == "v") {
       countriesAlpha.v.push(allCountries[i]);
       continue
      }
      if (firstLetter == "w") {
       countriesAlpha.w.push(allCountries[i]);
       continue
      }
      if (firstLetter == "x") {
       countriesAlpha.x.push(allCountries[i]);
       continue
      }
      if (firstLetter == "y") {
       countriesAlpha.y.push(allCountries[i]);
       continue
      }
      if (firstLetter == "z") {
       countriesAlpha.z.push(allCountries[i]);
       continue
      }
    }
    setCountriesAlpha(countriesAlpha)
  }


  // we make http request to store all country names
  useEffect(() => {

    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        let countriesName = [];
        for (let i = 0 ; i < response.data.length ; i++) {
          countriesName.push(response.data[i].name.common);
        }

        console.log("data is fetched")

        // we store all country names in a orgnize way to make it easy to search on the countries name

        orgnize (countriesName)
        console.log("done")
      })
      
  } , [])

  const handleChange = (event) => {
    setCountry(event.target.value)

    // when you delete what you input the country list then will be empty

    if (event.target.value.length == 0) {
      setDisplayCountery([])
    }
    
    // when the user put the first letter of the country name we display all countries start with this letter

    if (event.target.value.length === 1) {
      let display = countriesAlpha[event.target.value]
      setDisplayCountery(display)
    }
    
    // display the country names that match what the user input

    if (event.target.value.length > 1){
      let firstIndex = event.target.value[0]
      let display = countriesAlpha[firstIndex]
 
      let h = [];
      for (let i = 0 ; i < display.length ; i++) {
        if (display[i].toUpperCase().includes(event.target.value.toUpperCase())) {
          h.push(display[i])
        }
      }
      setDisplayCountery(h)
    }
  }

  return (
    <>
        <label> find country <input onChange={handleChange} value = {country} /></label>

        <Countries countryName = {displayCountry} />

    </>
  )
}

export default App
