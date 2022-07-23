const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&APPID=9c85eeb8f972c31295688e787114d16f`)
        .then(data => data.json())

}





export default getWeather