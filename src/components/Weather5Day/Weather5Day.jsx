import React from "react";
import s from "./Weather5Day.module.css";

const Weather5Day = (props) => {
    console.log(props)
    return (
            <div className={s.comingDays}>
                <div className={s.coming5DaysItems}>
                    в ближайшие 3 часа
                </div>
                <div className={s.dayOne}>
                    <div>
                        {props.Weather5Day[0].dt_txt}
                    </div>
                    <div>
                        {props.Weather5Day[0].main.temp}
                    </div>

                </div>
                <div className={s.dayTwo}>
                    <div>
                        {props.Weather5Day[0].dt_txt}
                    </div>
                    <div>
                        {props.Weather5Day[0].main.temp}
                    </div>
                </div>
                <div className={s.dayThree}>
                    <div>
                        {props.Weather5Day[0].dt_txt}
                    </div>
                    <div>
                        {props.Weather5Day[0].main.temp}
                    </div>
                </div>
                <div className={s.nextHours}>
                    <button>
                        следующие 3 часа
                    </button>
                </div>
        </div>



    )
}

export default Weather5Day