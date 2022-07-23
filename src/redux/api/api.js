import * as axios from 'axios';

const getWeather = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=9c85eeb8f972c31295688e787114d16f`)

}





export default getWeather