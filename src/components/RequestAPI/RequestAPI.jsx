import React from "react";
import s from "./RequestAPI.module.css"

const RequestAPI = (props) => {
    return (
        <div className={s.RequestAPIItems}>
            <div className={s.Input}>
                <input type="text" placeholder={"Введите API-key!"}/>
            </div>
            API-key: 9b0cb4aa82a4f56732e2b89b3a933f8f
        </div>
    )
}

export default RequestAPI