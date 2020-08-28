import React from "react";
import s from "./WeatherOfChelyabinsk.module.css";
import WeatherItems from "./WeatherItems/WeatherItems";

const WeatherOfChelyabinsk = (props) => {

    return (
        <div className={s.weatherOfChelyabinskItems}>
            <div className={s.weatherElements}>
                <WeatherItems main={props.testWeather.main} wind={props.testWeather.wind} dayWeek={props.testWeather.dayWeek} Weather5Day={props.Weather5Day}/>
            </div>
        </div>
    )
}

export default WeatherOfChelyabinsk