import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherOfChelyabinskContainer from "./components/WeatherOfChelyabinsk/WeatherOfChelyabinskContainer";
import {Route} from "react-router";
import Footer from "./components/Footer/Footer";
import RequestAPI from "./components/RequestAPI/RequestAPI";

function App() {
    return (
        <div className={"App-wrapper"}>
            <div className="RequestApiItems">
                <Route path="/requestAPI" render={() => <RequestAPI/>}/>
            </div>
            <div className="App-wrapperAfterRequest">
                <Header/>
                <div className="weather">
                    <Route path="/weatherofchelyabinsk" render={() => <WeatherOfChelyabinskContainer/>}/>
                </div>
                <Footer />
            </div>
        </div>


    );
}

export default App;
