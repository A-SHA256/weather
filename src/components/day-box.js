import grouping from "../utils/grouping.js";

const dayBox = (grouped = {}) => {
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
            li.textContent = `${hour}: ${temperature}`;
            ul.appendChild(li);
        });

        dateSection.appendChild(ul);
        container.appendChild(dateSection);
    });

    return container;
}

export default dayBox;