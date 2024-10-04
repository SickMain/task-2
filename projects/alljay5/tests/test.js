const { formatTimeDifference } = require('../src/formatTimeDifference');


const tests = [
    { date1: new Date('2024-12-21T15:00:00'), date2 : new Date('2024-12-21T15:00:50'), expected: '50 секунд' }, 
    { date1: new Date('2023-12-21T15:00:00'), date2 : new Date('2022-06-21T15:11:50'), expected: '547 дней 23 часов 48 минут 10 секунд' }, 
    { date1: new Date('2022-12-21T15:00:00'), date2 : new Date('2022-12-22T00:11:50'), expected: '9 часов 11 минут 50 секунд' }, 
];

tests.forEach((i, index) => {
    const result = formatTimeDifference(i.date1, i.date2);
    if (result === i.expected) {
        console.log(`Тест ${index + 1} пройден: ожидалось ${i.expected}, получено: ${result}`);
    } else {
        console.error(`Тест ${index + 1} не пройден: ожидалось ${i.expected}, получено: ${result}`);
    }
});