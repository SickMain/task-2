const {timeDifference} = require('../src/timeDifference')

const testOne = {
    date1: new Date('2024-10-16T00:00:00'), 
    date2: new Date('2024-10-16T00:00:30')
}
const testSecond = {
    date1: new Date('2024-10-16T00:00:00'),
    date2: new Date('2024-11-18T00:01:00')
}
const testThird = {
    date1: new Date('2024-12-21T15:00:00'), 
    date2: new Date('2024-12-21T15:00:00')
}



console.log(timeDifference(testOne.date1, testOne.date2) === '30 секунд' ? "successfully" : "failed");
console.log(timeDifference(testSecond.date1, testSecond.date2) === '33 дней 1 минут' ? "successfully" : "failed");
console.log(timeDifference(testThird.date1, testThird.date2) === '0 секунд' ? "successfully" : "failed");

