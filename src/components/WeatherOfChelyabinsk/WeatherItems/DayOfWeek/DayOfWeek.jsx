import React from "react";
import s from "../MainTemp/MainTemp.module.css";

const DayOfWeek = (props) => {

    return (
        <div className={s.DayOfWeekItem}>
            <div className={s.DayName}>
                Дата
            </div>
            <div className={s.DayItem}>
                {props.Weather5Day[0].dt_txt}
            </div>
        </div>
    )
}

export default DayOfWeek