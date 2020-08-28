import React from "react";
import s from "../ChanceOfRain/ChanceOfRainModule.css";

const ChanceOfRain = (props) => {
    return (
        <div className={s.ChanceOfRainItems}>
            <div className={s.ChanceOfRainName}>
                Вероятность
            </div>
            <div className={s.ChanceOfRainItem}>
                Дождя &nbsp; "5%"
            </div>
        </div>
    )
}

export default ChanceOfRain