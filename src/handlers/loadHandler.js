import getData from "../api-calls.js";
import dayBox from "../components/day-box.js";
import grouping from "../utils/grouping.js";

const loadHandler = async () => {
    const data = await getData();
    console.log(data);
    if (data.message === 'oops!') {
        const err = document.createElement('h1');
        err.innerHTML = 'something went wrong';
        document.body.appendChild(err);
    }
    const readyData = grouping(data);
    const output = dayBox(readyData);
    document.body.appendChild(output);
};

export default loadHandler;