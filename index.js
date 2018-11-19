// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  return array2 = array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
  return array2 = array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, selectingDrivers) {
  return selectingDrivers(drivers);
}
