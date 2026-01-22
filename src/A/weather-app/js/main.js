// Ad-hoc code...
const { VITE_DEFAULT_CITY, VITE_OPEN_WEATHER_API } = import.meta.env;

console.log('Default City:', VITE_DEFAULT_CITY);    // ✅ This is ok
console.log('API Key:', VITE_OPEN_WEATHER_API);     // ❌ NOT OK!

import { getForecast } from './api/open-weather';
const [city, country] = VITE_DEFAULT_CITY.split(',');
getForecast({
    city,
    country,
    callback: (data) => {
        console.log(data);
    }
});
