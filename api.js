/**
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright M ANSARI 2024 All rights reserved
 * @author  ANSARI 
 */
'use strict';

const api_key ="e4d474a322c0877f50ad1ce9bfa13d83";

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
      .then((res) => res.json())
      .then((data) => callback(data));
  };
  
  export const url = {
    currentWeather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=imperial`;
    },
    forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=imperial`;
    },
    airPollution(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
      return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
  
    geo(query) {
      return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    },
  };
