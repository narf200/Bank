import React from 'react';
import {Route} from "react-router";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {PrivateRoute} from "./components/PrivateRouter/PrivateRouter";
import RequestAPIContainer from "./components/RequestAPI/RequestAPIContainer";
import WeatherOfChelyabinskContainer from "./components/WeatherOfChelyabinsk/WeatherOfChelyabinskContainer";


function App() {
    return (
        <div className=".App-wrapper">
            <Header/>
            <Route path="/" render={() => <RequestAPIContainer/>}/>
            <div className="weather">
                <PrivateRoute path="/weather" component={WeatherOfChelyabinskContainer}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
