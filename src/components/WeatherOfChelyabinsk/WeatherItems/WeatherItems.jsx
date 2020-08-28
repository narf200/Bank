import React from "react";
import s from "./WeatherItems.module.css";
import MainTemp from "./MainTemp/MainTemp";
import DayOfWeek from "./DayOfWeek/DayOfWeek";
import MinMaxTemp from "./MinMaxTemp/MinMaxTemp";
import RealFeel from "./RealFeel/RealFeel";
import ChanceOfRain from "./ChanceOfRain/ChanceOfRain";
import WindSpeed from "./WindSpeed/WindSpeed";

const WeatherItems = (props) => {

    return (
        <div className={s.weatherItems}>
            <div className={s.mainTemperature}>
               <MainTemp temp={props.main.temp}/>
            </div>
            <div className={s.dayOfWeek}>
               < DayOfWeek  Weather5Day={props.Weather5Day}/>
            </div>
            <div className={s.maxMinTemperature}>
                <MinMaxTemp temp_min={props.main.temp_min} temp_max={props.main.temp_max}/>
            </div>
            <div className={s.realFeel}>
               <RealFeel feels_like={props.main.feels_like}/>

            </div>
            <div className={s.chanceOfRain}>
                <ChanceOfRain chance={props.wind.chance} />
            </div>
            <div className={s.windSpeed}>
               <WindSpeed speed={props.wind.speed}/>

            </div>
        </div>
    )
}

export default WeatherItems