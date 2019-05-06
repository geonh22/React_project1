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

//  const App=()=>{

//   const API_KEY = '9130108a5c7e47563c0c351f9e22f543f9132530';
//   const ROOT_URL = 'http://api.waqi.info//feed/korea/';

  // const API_KEY = 'JnIX4OVjZ8gY9DD3h5mPDIaBNX5%2FVBuhJLizs3X5tErre9SYLZm3%2Bx8MgM8jDzhsyzsIaR41UpAfTrft%2BF4ubQ%3D%3D';
  // const ROOT_URL = 'http://api.waqi.info//feed/korea/seoul/nowon-gu/?token=9130108a5c7e47563c0c351f9e22f543f9132530';
// }
// const getweather = async() =>{
//   const response = await fetch(`${ROOT_URL}${sido}${city}?token=${API_KEY}`)
//   const data = await response.json()
//   console.log(data.list)
// }

// const getweather = async() =>{
//   const response = await fetch(`${proxyurl}${ROOT_URL}?sidoName=서울&searchCondition=DAILY&pageNo=1&numOfRows=15&ServiceKey=`)
//   const data = await response.json()
//   console.log(data.list)
// }