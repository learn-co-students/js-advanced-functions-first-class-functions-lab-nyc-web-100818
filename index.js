// Code your solution in this fill
const returnFirstTwoDrivers = function (arry){
  return arry.slice(0,2);
}

const returnLastTwoDrivers = function (arry){
  return arry.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function (fare){
      return fare * multiplier
    };
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (drivers, driverFunc){
  return driverFunc(drivers)
}
