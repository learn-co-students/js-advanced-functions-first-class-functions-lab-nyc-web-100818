// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  let firstTwo = array.slice(0, 2);
  return firstTwo;
}

const returnLastTwoDrivers = function (array) {
  let lastTwo = array.slice(-2);
  return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (num) {
  return function (fare) {
    return num * fare;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array, funcy) {
  return funcy(array);
}
