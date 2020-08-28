import React from "react";
import s from "../MainTemp/MainTemp.module.css";

const MinMaxTemp = (props) => {

  return ( <div className={s.MinMaxTempItem}>
        <div className={s.MinTempName}>
            Минимальная Температура
        </div>
        <div className={s.MinTempItem}>
            {props.temp_min}
        </div>
      <div className={s.MaxTempName}>
          Максимальная Температура
      </div>
      <div className={s.MaxTempItem}>
          {props.temp_max}
      </div>
    </div>)
}

export default MinMaxTemp