const { formatTimeDifference } = require('./formatTimeDifference');

console.log("Время до ссесии: " + formatTimeDifference(new Date('2024-12-21T15:00:00'), new Date()));
console.log("Время до нового года: " + formatTimeDifference(new Date('2025-01-01T00:00:00'), new Date()));
console.log("Время до зашиты: " +formatTimeDifference(new Date('2025-05-30T12:00:00'), new Date()));
