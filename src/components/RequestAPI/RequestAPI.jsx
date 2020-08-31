import React from "react";
import s from "./RequestAPI.module.css"

const RequestAPI = (props) => {
    console.log(props)

    let newApikeyBody = props.requestApiPage.newApiKeyBodyState

    let onSendApiKeyClick = () => {
        props.sendApikey()
    }

    let onNewApiKeyChange = (e) => {
        let body = e.target.value;
        props.updateNewApiKey(body)
    }

    return (
        <div className={s.RequestAPIItems}>
            <div className={s.Input}>
                <input
                    value={newApikeyBody}
                    onChange={onNewApiKeyChange}
                    type="text"
                    placeholder={"Введите API-key!"}
                    size="35"
                />
            </div>
            <div className={s.button}>
                <button onClick={onSendApiKeyClick}> Отправить</button>
            </div>
            API-key: 9b0cb4aa82a4f56732e2b89b3a933f8f
        </div>
    )
}

export default RequestAPI