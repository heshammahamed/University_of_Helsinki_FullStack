import axios from "axios";
import { useState,useEffect } from "react";

const WeatherCondition = ({location}) => {
    const [data , setData] = useState(null)

    const apikey = import.meta.env.VITE_WEATHER_API_KEY

    useEffect (() => {
        if (location.length != 0) {
            axios 
             .get (`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=standard&appid=${apikey}`)
             .then (res => setData(res.data))
        }
    }, [location])

    if (location.length == 0) {
        return null
    }else {
        return (
            <>

            {
                data ?
                    (  
                        <div>
                            <h1>weather in {data.name}</h1>
                            <p>Tempreature : {data.main.temp} cel</p>
                            <img src= {`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
                            <p>wind speed : {data.wind.speed} m/s</p>
                        </div>
                    )
                    : (<p>loading ...</p>)
            }

            </>


        )

    }
}

export default WeatherCondition