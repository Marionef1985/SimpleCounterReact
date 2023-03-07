//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";



//render your react application
ReactDOM.render(<SimpleCounter firstDigit="1" secondDigit="2" thirdDigit="3" fourthDigit="4" />, document.querySelector("#app"));

