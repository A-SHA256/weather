const grouping = (data = {}) => {
    const { time, temperature_2m } = data.hourly;
    const sign = data.hourly_units.temperature_2m;
    const grouped = {};
    time.forEach((timestamp, i) => {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const month = 'May';
        const [date, hour] = timestamp.split('T');
        const fullDate = new Date(date);
        const day = `${weekday[fullDate.getDay()]}, ${fullDate.getDate()} ${month} ${fullDate.getFullYear()}`;
        //const hour = `${fullDate.getHours()}:${fullDate.getMinutes()}`;
        //console.log(day.toString());
        //console.log(date);
        if (!grouped[day]) grouped[day] = [];
        grouped[day].push({ hour, temperature: `${temperature_2m[i]} ${sign}` });
    });
    return grouped;
}

export default grouping;