import axios from 'axios';

const API_KEY = '9130108a5c7e47563c0c351f9e22f543f9132530';
const ROOT_URL = 'http://api.waqi.info//feed/korea/';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  const url = `${ROOT_URL}/korea/seoul/nowon-gu/?token=${API_KEY}`;
  const request = axios.get(url);
  
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function selectCity(city) {
  return {
  type: 'CITY_SELECTED',
  payload: city
  };
 }
