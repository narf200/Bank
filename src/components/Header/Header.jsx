import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.cityName}>
                Погода в Челябинске
            </div>
        </header>
    );
}

export default Header
