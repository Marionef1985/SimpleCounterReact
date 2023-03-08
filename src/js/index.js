//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";


let counter = 0;

setInterval(()=> {
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
  ReactDOM.render(
    <SimpleCounter
      firstDigit={one}
      secondDigit={two}
      thirdDigit={three}
      fourthDigit={four}
    />,
    document.querySelector("#app")
  );
}, 1000);



//render your react application
