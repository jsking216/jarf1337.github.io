export const shouldMowOrSprinkle = (weather) => {
    const { 
        data: {
            daily
        } 
    } = weather;
    let shouldMow, shouldSprinkle = true;
    let daysWithoutRain = 0;
    for (const day of daily) {
        if (day.pop < 25 && day.rain === 'undefined') {
            daysWithoutRain++;
        } else break;
    }
    shouldMow = (daysWithoutRain < 3);
    shouldSprinkle = (daysWithoutRain > 3);
    return { shouldMow, shouldSprinkle };
};