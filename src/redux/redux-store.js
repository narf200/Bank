import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
import WeatherChelyabinskReducer from "./WeatherChelyabinskReducer";
import RequestAPIReducer from "./RequestAPIReducer/RequestAPIReducer";

let reducers = combineReducers({
    weatherChelyabinskPage: WeatherChelyabinskReducer,
    requestApiPage: RequestAPIReducer,

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;