import getData from "../api-calls.js";
import dayBox from "../components/day-box.js";

const loadHandler = async () => {
    const data = await getData();
    const output = dayBox(data);
    document.body.appendChild(output);
};

export default loadHandler;