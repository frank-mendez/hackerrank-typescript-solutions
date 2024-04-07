function timeConversion(s: string): string {
    // Initialize
    const timeArr = s.split(':')
    const isPostMeridiem = s.includes('PM')
    const givenHour = +timeArr[0]

    // Calculate
    let hour = 0
    if(isPostMeridiem) {
        hour = givenHour + 12
    } else {
        hour = givenHour
    }

    //Dispaly
    return hour.toString() + ':' + timeArr[1] + ':' + timeArr[2].substring(0, timeArr[2].length - 2)

}

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


console.log('timeArr', timeConversion('07:05:45PM'))
console.log('timeArrAI', timeConversionAi('07:05:45PM'))