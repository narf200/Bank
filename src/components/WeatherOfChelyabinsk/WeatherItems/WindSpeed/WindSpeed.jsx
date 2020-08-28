import React from "react";
import s from "./WindSpeed.module.css";

const WindSpeed = (props) => {
    return (
        <div className={s.WindSpeedItems}>
            <div className={s.WindSpeedName}>
                Скорость
            </div>
            <div className={s.WindSpeedItem}>
                ветра &nbsp; {props.speed}
            </div>
        </div>
    )
}

export default WindSpeed