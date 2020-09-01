import React from 'react';
import {Route} from "react-router";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RequestAPIContainer from "./components/RequestAPI/RequestAPIContainer";
import WeatherOfChelyabinskContainer from "./components/WeatherOfChelyabinsk/WeatherOfChelyabinskContainer";
import {PrivateRoute} from "./components/PrivateRouter/PrivateRouter";

function App() {
    return (

        <div className="App-wrapper">
            <Header/>
            <Route path="/requestApi" render={() => <RequestAPIContainer/>}/>
            <div className="weather">
                <PrivateRoute path="/weatherofchelyabinsk" component={ WeatherOfChelyabinskContainer}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
