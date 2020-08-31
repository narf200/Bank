import React from 'react';
import {Route} from "react-router";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RequestAPIContainer from "./components/RequestAPI/RequestAPIContainer";
import WeatherOfChelyabinskContainer from "./components/WeatherOfChelyabinsk/WeatherOfChelyabinskContainer";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <RequestAPIContainer/>
            <div className="weather">
                <Route path="/weatherofchelyabinsk" render={() => <WeatherOfChelyabinskContainer/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
