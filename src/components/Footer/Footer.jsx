import React from "react";
import footerCity from "../../assets/images/footerCity.png"
import s from "./Footer.module.css"

const Footer = (props) => {
    return (
        <div className={s.footerItem}>
            <img className={s.footerImg} src={footerCity} alt=""/>
        </div>
    )
}

export default Footer