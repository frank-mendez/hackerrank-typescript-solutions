**Typescript

***
    function timeConversionAi(s: string): string {
    const isAM = s.includes('AM');
    const timeWithoutAMPM = s.slice(0, -2);
    const [hourStr, minuteStr, secondStr] = timeWithoutAMPM.split(':').map(str => parseInt(str));
    
        let militaryHour = hourStr;
        if (isAM && hourStr === 12) {
            militaryHour = 0;
        } else if (!isAM && hourStr !== 12) {
            militaryHour += 12;
        }
    
        const militaryTime = `${militaryHour.toString().padStart(2, '0')}:${minuteStr.toString().padStart(2, '0')}:${secondStr.toString().padStart(2, '0')}`;
        return militaryTime;
    }
*****