//      ./js/api/open-weather.js
// 🚨 This is code running in the browser.
// 🚨 Do not do this in real life.
// 🚨 It will leak your secrets to anyone who views your website! ☠️
// 🚨 Secrets should be used/processed on the SERVER only!!!
const { VITE_OPEN_WEATHER_API } = import.meta.env;

// Internal functions and constants to support the exporte functions
const BASE_API_URL = 'https://api.openweathermap.org/data/2.5/';
const queryString = ({endpoint, city, country}) =>
    `${endpoint}?q=${city},${country}&units=metric&appid=${VITE_OPEN_WEATHER_API}`;

const fetchData = ({url, callback}) => {
    fetch(url).then(handleResponse).then(callback);
}

const handleResponse = (response) => response.json();

export const getCurrentWeather = function({city, country, callback}) {
    const WEATHER = BASE_API_URL + 'weather/';
    const url = queryString({endpoint:WEATHER, city, country});
    fetchData({url, callback});
}

export const getForecast = function({city, country, callback}) {
    const FORECAST = BASE_API_URL + 'forecast/';
    const url = queryString({endpoint:FORECAST, city, country});
    fetchData({callback, url});
}