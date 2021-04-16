export const shouldMowOrSprinkle = (weather) => {
    const { 
        data: {
            daily
        } 
    } = weather;
    let daysWithoutRain = 0;
    for (const day of daily) {
        if (day.pop < 0.25 && day.rain === undefined) {
            daysWithoutRain++;
        } else {
            break;
        }
    }
    const shouldMow = (daysWithoutRain < 3);
    const shouldSprinkle = (daysWithoutRain > 3);
    return { shouldMow, shouldSprinkle };
};