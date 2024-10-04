function formatTimeDifference(date1, date2) {
    // Разница в миллисекундах
    let diff = Math.abs(date2 - date1);

    // Разница в секундах, минутах, часах и днях
    let seconds = Math.floor(diff / 1000) % 60;
    let minutes = Math.floor(diff / (1000 * 60)) % 60;
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Создаем массив частей времени
    let parts = [];
    if (days > 0) parts.push(`${days} дней`);
    if (hours > 0) parts.push(`${hours} часов`);
    if (minutes > 0) parts.push(`${minutes} минут`);
    if (seconds > 0) parts.push(`${seconds} секунд`);

    // Объединяем части времени в строку
    return parts.join(' ');
}

module.exports = { formatTimeDifference };