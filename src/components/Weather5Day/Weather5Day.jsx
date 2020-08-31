import React from "react";
import s from "./DayOne.module.css";

const Weather5Day = (props) => {
    console.log(props)
    return (
        <div className={s.comingDays}>
            <div className={s.coming5DaysItems}>
                в ближайшие 3 часа
            </div>
            <div className={s.hourOne}>
                <div>
                    {props.Weather5Day[0].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[0].main.temp}
                </div>
            </div>
            <div className={s.hourTwo}>
                <div>
                    {props.Weather5Day[1].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[1].main.temp}
                </div>
            </div>
            <div className={s.hourThree}>
                <div>
                    {props.Weather5Day[2].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[2].main.temp}
                </div>
            </div>
            <div className={s.hourFour}>
                <div>
                    {props.Weather5Day[3].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[3].main.temp}
                </div>
            </div>
            <div className={s.hourFive}>
                <div>
                    {props.Weather5Day[4].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[4].main.temp}
                </div>
            </div>
            <div className={s.hourSix}>
                <div>
                    {props.Weather5Day[5].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[5].main.temp}
                </div>
            </div>
            <div className={s.hourSeven}>
                <div>
                    {props.Weather5Day[6].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[6].main.temp}
                </div>
            </div>
            <div className={s.hourEight}>
                <div>
                    {props.Weather5Day[7].dt_txt}
                </div>
                <div>
                    {props.Weather5Day[7].main.temp}
                </div>
            </div>
            <div className={s.nextDays}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>


    )
}

export default Weather5Day