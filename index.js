// Code your solution in this file!
//returnFirstTwoDrivers is stored in a constant, but the constant contains an a function expression and 
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
  // slices out first two elements in an array
};

//returnLsatTwoDrivers, same like the above function
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
  // slices out last two elements of the array
}

// storing functions inside an array, ***MIND-BLOWN***
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (value) {
    return multiplier * value;
  }
};

//just call createFareMultiplier inside this other function dawg
const fareDoubler = createFareMultiplier(2)
//another DUH moment
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, callback) {
  return callback(drivers);
}
