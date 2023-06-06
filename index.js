// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return [arr[0], arr[1]];
}

const returnLastTwoDrivers = (arr) => {
    return [arr[arr.length - 2], arr[arr.length - 1]];
}

function createFareMultiplier(num)
{
    return (fare) => {
        return fare * num;
    };
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(arrayOfDrivers, funct)
{
    return funct(arrayOfDrivers);
}
