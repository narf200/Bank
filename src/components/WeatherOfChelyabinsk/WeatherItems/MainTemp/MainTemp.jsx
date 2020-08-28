import React from "react";
import s from "./MainTemp.module.css";

const MainTemp = (props) => {

    return (
        <div className={s.mainTempItem}>
            <div className={s.mainName}>
                Температура
            </div>
            <div className={s.mainItem}>
                {props.temp}
            </div>
        </div>
    )
}

export default MainTemp