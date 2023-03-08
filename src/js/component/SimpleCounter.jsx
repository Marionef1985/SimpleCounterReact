import React from "react";
import propTypes from "prop-types";

//include images into your bundle

//create your first component
const SimpleCounter = (props) => {
  return (
    <>
      <div className="conatiner-fluid bigCounter">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-3 m-0"><i className="fa-regular fa-clock"></i></div>
            <div className="col-2 m-1 fourthDigit">{props.fourthDigit % 10}</div>
            <div className="col-2 m-0 thirdDigit">{props.thirdDigit % 10}</div>
            <div className="col-2 m-1 secondDigit">{props.secondDigit % 10}</div>
            <div className="col-2 m-0 firstDigit">{props.firstDigit % 10}</div>
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
