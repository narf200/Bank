import React from "react";
import Spinner from "../../assets/images/Spinner.svg";

const Preloader = (props) => {
    return (
        <div>
            <img src={Spinner}/>
        </div>
    )
}

export default Preloader