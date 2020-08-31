import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/',
})

export const weatherNowApi = {
    getWeatherChelyabinsk() {
        return instance.get(`weather?lat=55.1544&lon=61.4297&units=metric&appid=9b0cb4aa82a4f56732e2b89b3a933f8f`)
            .then(response => {
                return response.data
            })
    }
}

export const weather5DayApi = {
    getWeather5Day(day=2) {
        return instance.get(`forecast?lat=55.1544&lon=61.4297&units=metric&appid=9b0cb4aa82a4f56732e2b89b3a933f8f`)
            .then(response => {
                return response.data.list.slice(8*(day-1), 8*(day-1)+8)
            })
    }
}
