import {weatherNowApi} from "../api/api";
import {weather5DayApi} from "../api/api";

const SET_TEST_WEATHER_5DAY = 'SET_TEST_WEATHER_5DAY'
const SET_TEST_WEATHER_CHELYABINSK = 'SET_TEST_WEATHER_CHELYABINSK'


let initialState = {
    testWeather: {
        main: {temp: 23, feels_like: 21.8, temp_min: 23, temp_max: 23, pressure: 1015},
        wind: {speed: 3 }
    },
    Weather5Day: [
        {main:{temp:-5}}
        ]


};


const weatherChelyabinskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST_WEATHER_CHELYABINSK: {
            return {...state, testWeather: action.testWeather}
        }
        case SET_TEST_WEATHER_5DAY: {
            return {...state, Weather5Day: action.Weather5Day}
        }
        default:
            return state;
    }

}

export const setTestWeatherChelyabinsk = (testWeather) => ({type: SET_TEST_WEATHER_CHELYABINSK, testWeather})

export const setWeather5Day = (Weather5Day) => ({type: SET_TEST_WEATHER_5DAY, Weather5Day})

export const getWeatherThunkCreator = () => {
    return (dispatch) => {
        weatherNowApi.getWeatherChelyabinsk()
            .then(testWeather => {
                dispatch(setTestWeatherChelyabinsk(testWeather))
            })
    }
}


export const getWeather5DayThunkCreator = () => {
    return (dispatch) => {
        weather5DayApi.getWeather5Day()
            .then(Weather5Day => {
                dispatch(setWeather5Day(Weather5Day))
            })
    }
}


export default weatherChelyabinskReducer;
