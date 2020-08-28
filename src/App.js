import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherFor3Hours from "./components/WeatherFor3Hours/WeatherFor3Hours";
import WeatherOfChelyabinskContainer from "./components/WeatherOfChelyabinsk/WeatherOfChelyabinskContainer";
import {Route} from "react-router";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <div className="weather">
                <Route path="/weatherofchelyabinsk" render={() => <WeatherOfChelyabinskContainer/>}/>
                <Route path="/weatherfor3hours" render={() => <WeatherFor3Hours/>}/>
            </div>
        </div>
    );
}

export default App;
