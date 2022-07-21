import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink } from "react-router-dom"
import { setUserData } from "../../redux/authreducer";
import s from './profile.module.css'
import getPosition from '../../redux/api/api'
import { useState } from "react";
import { useEffect } from "react";
import LoginPage from "../loginpage/loginpage";
import Preloader from "../preloader/preloader";
import getWeather from "../../redux/api/api";



const ProfilePage = () => {
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const clearUserData = () => {
        dispatch(setUserData(null, null, false))
    }
    const [weather, setWeather] = useState([])

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getWeather(lat, lon)
                    .then(weather => {
                        setWeather(weather);
                    })
            })
        }
    }, [])

    let icon = weather.weather?.[0]?.icon;
    let deg = weather.wind?.deg
    const direction = () => {

        if (0 <= deg && deg <= 45) {
            return <span>NNE</span>
        }
        else if (45 < deg && deg <= 90) {
            return <span>ENE</span>
        }
        else if (90 < deg && deg <= 135) {
            return <span>ESE</span>
        }
        else if (135 < deg && deg <= 180) {
            return <span>SES</span>
        }
        else if (180 < deg && deg <= 225) {
            return <span>SWS</span>
        }
        else if (225 < deg && deg <= 270) {
            return <span>WSW</span>
        }
        else if (270 < deg && deg <= 315) {
            return <span>NWN</span>
        }
        else if (315 < deg && deg <= 360) {
            return <span>NNW</span>
        }
    }

    if (!state.isAuth) {
        return <LoginPage />
    }
    if (weather.length == 0) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div className={s.profileHeader} >
                <div>Your profile:<span>{state.login}</span></div>
                <NavLink to='/'><button onClick={clearUserData}>OUT</button></NavLink>
            </div >
            <h3>Current weather</h3>
            <div className={s.city}>
                <div>{weather.name}</div><span> ({weather.coord?.lat.toFixed(2)},</span><span> {weather.coord?.lon.toFixed(2)})</span>
            </div>

            <div className={s.temp} >{weather.main?.temp}&deg;</div>
            <div className={s.main} >
                <div><img src={`https://openweathermap.org/img/wn/` + `${icon}` + `@2x.png`}></img></div>
                <span>{weather.weather?.[0]?.main},</span>
                <span> {weather.weather?.[0]?.description}</span>
            </div>
            <div className={s.wind} >Wind speed:{weather.wind?.speed} m/s, <span>{direction()}</span></div>
            <div className={s.other} >
                <span>Humidity: {weather.main?.humidity}% </span>
                <span>Pressure: {weather.main?.pressure} mm</span>
            </div>






        </div>
    )
}
export default ProfilePage