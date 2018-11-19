// Code your solution in this file!

const returnFirstTwoDrivers = function(driversArr) {
  return driversArr.slice(0, 2)
}


const returnLastTwoDrivers = function(driversArr) {
  return driversArr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(num){
    return num * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(driversArr, callBack){
  return callBack(driversArr);
};
