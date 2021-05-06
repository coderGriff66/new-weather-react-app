import React, { useState } from "react";
import axios from "axios";
import WeatherConditions from "./WeatherConditions";

import ForecastPlanner from "./ForecastPlanner";
import "./SearchEngine.css";

export default function SearchEngine(props) {
   const [weatherData, setWeatherData] = useState({ ready: false });
   const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      winds: response.data.wind.speed,
      tempMin: response.data.main.temp_min,
      city: response.data.name

    });
  }

  function search() {
    const apiKey = "583dfe3632c0ac709194cc5c5fda136a";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

  }

    function handleSubmit(event) {
      event.preventDefault();
      search(city);
;    }

    function handleCity(event) {
      setCity(event.target.value);
    }

  if (weatherData.ready) {
    return (
    <div className="SearchEngine">
    <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input type="Search" placeholder="Enter City Name" className="form-control shadow sm" autoFocus="on" autoComplete="off" onChange={handleCity}/>
            </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-success" width="100%" />
               </div>
                  <div className="col-3">
                    <button className="btn btn-warning">CURRENT</button>
                  </div>
          </div>
    </form>
      <div>
        <h1>{weatherData.city}</h1>
      </div>
      <WeatherConditions data={weatherData} />
             
        <div className="SearchEngine"><h4>5-DAY PLANNER</h4></div>
      <ForecastPlanner coordinates={weatherData.coordinates} />
    </div>
      
    );    

  } else {

    search();
  
  return "Loading";

  }
}
