import axios from 'axios';

const API_KEY = '34631450ea80025535a7261f833f06f2';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},GB`;
  const request = axios.get(url);



  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
