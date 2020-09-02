import React from "react";
import s from "./WeatherOfChelyabinsk.module.css";
import WeatherItems from "./WeatherItems/WeatherItems";
import Preloader from "../../common/Preloader/Preloader";

const WeatherOfChelyabinsk = (props) => {

    if (props.isFetching) {
        return <Preloader/>
    }

    return (
        <div className={s.weatherOfChelyabinskItems}>
            <div className={s.weatherItems}>
                <WeatherItems
                    main={props.testWeather.main}
                    wind={props.testWeather.wind}
                    dayWeek={props.testWeather.dayWeek}
                    Weather5Day={props.Weather5Day}
                />
            </div>
        </div>
    )
}

export default WeatherOfChelyabinsk

