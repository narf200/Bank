import React from "react";
import {connect} from "react-redux";
import {
    getWeatherThunkCreator,
    getWeather5DayThunkCreator
} from "../../redux/WeatherChelyabinskReducer";
import WeatherOfChelyabinsk from "./WeatherOfChelyabinsk";
import Weather5Day from "../Weather5Day/Weather5Day";
import s from "./weatherChelyabinskContainer.module.css"
import Preloader from "../../common/Preloader/Preloader";


class WeatherOfChelyabinskContainer extends React.Component {

    componentDidMount() {
        this.props.getWeatherThunkCreator();
        this.props.getWeather5DayThunkCreator();
    }

    render() {



        return <div className={s.weatherChelyabinskContainer}>
            <div className={s.weatherChelyabinsk}>
                <WeatherOfChelyabinsk
                    testWeather={this.props.Weather}
                    Weather5Day={this.props.Weather5Day}
                    isFetching={this.props.isFetching}
                />
            </div>
            <div className={s.Weather5Day}>
                <Weather5Day getWeather5DayThunkCreator={this.props.getWeather5DayThunkCreator}
                             Weather5Day={this.props.Weather5Day}
                             isFetching={this.props.isFetching}
                />
            </div>
        </div>


    }

}

let mapStateToProps = (state) => ({
    Weather: state.weatherChelyabinskPage.Weather,
    Weather5Day: state.weatherChelyabinskPage.Weather5Day,
    isFetching: state.weatherChelyabinskPage.isFetching
})

export default connect(mapStateToProps, {
    getWeatherThunkCreator,
    getWeather5DayThunkCreator
})(WeatherOfChelyabinskContainer)

