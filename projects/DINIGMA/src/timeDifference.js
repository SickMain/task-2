const timeDifference = (date1, date2) => {
    const diffInSeconds = Math.abs((date2 - date1) / 1000);
    
    const days = Math.floor(diffInSeconds / (3600 * 24));
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = Math.floor(diffInSeconds % 60);
    
    const parts = [];
    
    if (days > 0) parts.push(`${days} дней`);
    if (hours > 0) parts.push(`${hours} часов`);
    if (minutes > 0) parts.push(`${minutes} минут`);
    if (seconds > 0) parts.push(`${seconds} секунд`);
    
    return parts.length > 0 ? parts.join(' ') : '0 секунд';
};




module.exports = {timeDifference};
