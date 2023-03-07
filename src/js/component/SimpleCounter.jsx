import React from "react";

//include images into your bundle

//create your first component
const SimpleCounter = () => {
  return (
    <>
      <div className="conatiner-fluid bigCounter">
        <div className="container jutify-content-center">
          <div className="row jutify-content-center">
            <div className="col-3 clock">00</div>
            <div className="col-2 fourthDigit">0</div>
            <div className="col-2 thirdDigit">0</div>
            <div className="col-2 secondDigit">0</div>
            <div className="col-2 firstDigit">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

//SimpleCounter.protoType = {
//  fourthDigit: PropTypes.number,
//  thirdDigit: PropTypes.number,
//  secondDigit: PropTypes.number,
//  firstDigit: PropTypes.number,
//};

export default SimpleCounter;
