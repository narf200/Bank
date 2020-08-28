import React from "react";
import {connect} from "react-redux";
import {getWeatherThunkCreator, setTestWeatherChelyabinsk, getWeather5DayThunkCreator} from "../../redux/WeatherChelyabinskReducer";
import WeatherOfChelyabinsk from "./WeatherOfChelyabinsk";
import Weather5Day from "../Weather5Day/Weather5Day";
import s from "./weatherChelyabinskContainer.module.css"


class WeatherOfChelyabinskContainer extends React.Component {

    componentDidMount(props) {
        this.props.getWeatherThunkCreator();
        this.props.getWeather5DayThunkCreator()

    }

    render() {
        return (
        <div className={s.weatherChelyabinskContainer}>
            <div className={s.weatherChelyabinsk}>
                <WeatherOfChelyabinsk testWeather={this.props.testWeather} Weather5Day={this.props.Weather5Day}/>
            </div>
            <div className={s.Weather5Day}>
                <Weather5Day Weather5Day={this.props.Weather5Day}/>
            </div>

        </div>)

    }

}

let mapStateToProps = (state) => ({
    testWeather: state.weatherChelyabinskPage.testWeather,
    Weather5Day: state.weatherChelyabinskPage.Weather5Day
})

export default  connect(mapStateToProps, {setTestWeatherChelyabinsk, getWeatherThunkCreator, getWeather5DayThunkCreator})(WeatherOfChelyabinskContainer)

