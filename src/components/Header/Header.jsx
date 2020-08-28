import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>

            <div className={s.cityName}>
                Погода в Челябинске
            </div>
            <div className={s.today}>
                <NavLink to="/weatherofchelyabinsk" activeClassName={s.activeLink}>Сегодня</NavLink>
            </div>
            <div className={s.hours3}>
                <NavLink to="/weatherfor3hours" activeClassName={s.activeLink}>Ближайшие 3 часа</NavLink>
            </div>
        </header>
    );
}

export default Header
