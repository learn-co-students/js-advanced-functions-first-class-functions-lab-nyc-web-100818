// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
  return function (argument) {
    return integer * argument;
  }
}

const fareDoubler = function(createFareMultiplier) {
  return createFareMultiplier * 2;
}


const fareTripler = function(createFareMultiplier) {
  return createFareMultiplier * 3;
}


const fetchSpecifiedDrivers = function (drivers, eitherFunction){
  return eitherFunction(drivers);
}
