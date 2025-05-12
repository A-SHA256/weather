const dayBox = (data) => {
    const { time, temperature_2m } = data.hourly;

    const grouped = {};
    time.forEach((timestamp, i) => {
        const [date, hour] = timestamp.split('T');
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push({ hour, temperature: temperature_2m[i] });
    });

    const container = document.createElement('div');
    container.className = 'weather-container';

    Object.entries(grouped).forEach(([date, hours]) => {
        const dateSection = document.createElement('div');
        dateSection.className = 'weather-day';

        const heading = document.createElement('h2');
        heading.textContent = date;
        dateSection.appendChild(heading);

        const ul = document.createElement('ul');
        hours.forEach(({ hour, temperature }) => {
            const li = document.createElement('li');
            li.textContent = `${hour} — ${temperature}°C`;
            ul.appendChild(li);
        });

        dateSection.appendChild(ul);
        container.appendChild(dateSection);
    });

    return container;
}

export default dayBox;