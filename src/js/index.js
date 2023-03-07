//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";


//render your react application
ReactDOM.render(<SimpleCounter fisrtDigit="0" secondDigit="0" thirdDigit="0" fourthDigit="0" />, document.querySelector("#app"));
