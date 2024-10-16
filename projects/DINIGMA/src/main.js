const { timeDifference } = require('./timeDifference');

console.log("Время до сессии: " + timeDifference(new Date('2024-12-21T15:00:00'), new Date()));
console.log("Время до нового года: " + timeDifference(new Date('2025-01-01T00:00:00'), new Date()));
console.log("Время до защиты: " + timeDifference(new Date('2025-06-01T12:00:00'), new Date()));