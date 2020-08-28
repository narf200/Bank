import React from "react";
import s from "./RealFeel.module.css";

const RealFeel = (props) => {
    return (
        <div className={s.RealFeelItems}>
            <div className={s.RealFeelName}>
                Ощущается
            </div>
            <div className={s.RealFeelItem}>
                как &nbsp; {props.feels_like}
            </div>
        </div>
    )
}

export default RealFeel