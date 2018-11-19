// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  const firstTwo = drivers.slice(0, 2);
  return firstTwo
}
const returnLastTwoDrivers = function(drivers) {
  const lastTwo = drivers.slice(Math.max(drivers.length - 2, 1));
  return lastTwo
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
}

const fetchSpecifiedDrivers = function (drivers,fn) {
  return fn(drivers);
}
