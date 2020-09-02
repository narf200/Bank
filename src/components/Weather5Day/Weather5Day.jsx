import React from "react";
import s from "./Weather5Day.module.css";


const Weather5Day = (props) => {

    let onClickPage = (e) => {
        e.preventDefault()
        props.getWeather5DayThunkCreator(
        Number(e.target.innerText)
        )

    }

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
                    <span className={s.listItem1}><a className={s.aItem1} href="1" onClick={onClickPage} role="button" onKeyPress={onClickPage}>1</a></span >
                    <span сlassName={s.listItem2}><a className={s.aItem2} href="2" onClick={onClickPage} role="button" onKeyPress={onClickPage}>2</a></span >
                    <span сlassName={s.listItem3}><a className={s.aItem3} href="3" onClick={onClickPage} role="button" onKeyPress={onClickPage}>3</a></span >
                    <span сlassName={s.listItem4}><a className={s.aItem4} href="4" onClick={onClickPage} role="button" onKeyPress={onClickPage}>4</a></span >
                    <span сlassName={s.listItem5}><a className={s.aItem5} href="5" onClick={onClickPage} role="button" onKeyPress={onClickPage}>5</a></span >
            </div>
        </div>
    )
}

export default Weather5Day