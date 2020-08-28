import React from "react";
import s from "./Weather5Day.module.css";

const Weather5Day = (props) => {
    console.log(props)
    return (
            <div className={s.comingDays}>
                <div className={s.coming5DaysItems}>
                    в ближайшие 5 дней
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
                    26.08
                </div>
                <div className={s.dayThree}>
                    27.08
                </div>
                <div className={s.dayFour}>
                    29.08
                </div>
                <div className={s.dayFive}>
                    30.08
                </div>
        </div>



    )
}

export default Weather5Day