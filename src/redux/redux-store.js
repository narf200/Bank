import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
import WeatherChelyabinskReducer from "./WeatherChelyabinskReducer";

let reducers = combineReducers({
    weatherChelyabinskPage: WeatherChelyabinskReducer,

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;