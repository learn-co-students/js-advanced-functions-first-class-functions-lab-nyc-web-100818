// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
  let newArr = [];
  newArr.push(array[0], array[1]);
  return newArr;
};

const returnLastTwoDrivers = function(array) {
  return result = array.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arr, func) {
  return func(arr);
};
