import React from "react";
import s from "./WindSpeed.module.css";

const WindSpeed = (props) => {
    return (
        <div className={s.WindSpeedItems}>
            <div className={s.WindSpeedName}>
                Скорость ветра
            </div>
            <div className={s.WindSpeedItem}>
                {props.speed} &nbsp; км/ч
            </div>
        </div>
    )
}

export default WindSpeed