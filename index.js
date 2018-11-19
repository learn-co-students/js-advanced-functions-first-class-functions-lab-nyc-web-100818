// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
 }

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// function createFareMultiplier(fareMultiplier) {
const createFareMultiplier = function(fareMultiplier) {
  return function(integer) {
    return  fareMultiplier * integer;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
 //
const fetchSpecifiedDrivers = function(drivers, specifiedDrivers) {
  // 1 of 2 functions: returnLastTwoDrivers(drivers) || returnFirstTwoDrivers(drivers)
  return specifiedDrivers(drivers);
}
