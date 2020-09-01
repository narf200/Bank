import * as axios from "axios";

const instance = axios.create({
    // baseURL: 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/',
    baseURL: 'http://localhost:8080/api.openweathermap.org/data/2.5/'
})

let apiKey = localStorage.getItem("ApiKey")

export const weatherNowApi = {
    getWeatherChelyabinsk() {
        return instance.get(`weather?lat=55.1544&lon=61.4297&units=metric&appid=${apiKey}`)
            .then(response => {
                return response.data
            })
    }
}


export const weather5DayApi = {
    getWeather5Day(day=1) {
        return instance.get(`forecast?lat=55.1544&lon=61.4297&units=metric&appid=${apiKey}`)
            .then(response => {
                return response.data.list.slice(8*(day-1), 8*(day-1)+8)
            })
    }
}


export const init = (ApiKey) => {
    localStorage.setItem("ApiKey", ApiKey)
    apiKey = ApiKey
}

export const inited = () => {
    return !(apiKey === null)
}

