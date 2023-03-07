import React from "react";
import propTypes from "prop-types";

//include images into your bundle

//create your first component
const SimpleCounter = (props) => {
  return (
    <>
      <div className="conatiner-fluid bigCounter">
        <div className="container">
          <div className="row">
            <div className="col-3 clock">00</div>
            <div className="col-2 fourthDigit">{props.fourthDigit}</div>
            <div className="col-2 thirdDigit">{props.thirdDigit}</div>
            <div className="col-2 secondDigit">{props.secondDigit}</div>
            <div className="col-2 firstDigit">{props.firstDigit}</div>
          </div>
        </div>
      </div>
    </>
  );
};

SimpleCounter.protoType = {
  fourthDigit: propTypes.number,
  thirdDigit: propTypes.number,
  secondDigit: propTypes.number,
  firstDigit: propTypes.number,
};

export default SimpleCounter;
