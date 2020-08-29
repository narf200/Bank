import {weatherNowApi} from "../api/api";
import {weather5DayApi} from "../api/api";

const SET_TEST_WEATHER_5DAY = 'SET_TEST_WEATHER_5DAY'
const SET_TEST_WEATHER_CHELYABINSK = 'SET_TEST_WEATHER_CHELYABINSK'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    Weather: {
        main: {temp: 23, feels_like: 21.8, temp_min: 23, temp_max: 23, pressure: 1015},
        wind: {speed: 3 }
    },
    Weather5Day: [
        {main:{temp:-5}}
        ],
    isFetching: false


};


const weatherChelyabinskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST_WEATHER_CHELYABINSK: {
            return {...state, Weather: action.Weather}
        }
        case SET_TEST_WEATHER_5DAY: {
            return {...state, Weather5Day: action.Weather5Day}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const setWeatherChelyabinsk = (Weather) => ({type: SET_TEST_WEATHER_CHELYABINSK, Weather})

export const setWeather5Day = (Weather5Day) => ({type: SET_TEST_WEATHER_5DAY, Weather5Day})

export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getWeatherThunkCreator = () => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true))
        weatherNowApi.getWeatherChelyabinsk()
            .then(testWeather => {
                dispatch(setToggleIsFetching(false))
                dispatch(setWeatherChelyabinsk(testWeather))
            })
    }
}


export const getWeather5DayThunkCreator = () => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true))
        weather5DayApi.getWeather5Day()
            .then(Weather5Day => {
                dispatch(setToggleIsFetching(false))
                dispatch(setWeather5Day(Weather5Day))
            })
    }
}


export const getToggleIsFetchingThunkCreator = () => {
    return (dispatch) => {
        weather5DayApi.getWeather5Day()
            .then(isFetching => {
                dispatch(setToggleIsFetching(isFetching))
            })
    }
}


export default weatherChelyabinskReducer;
