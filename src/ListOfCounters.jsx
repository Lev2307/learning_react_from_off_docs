import { useState } from "react";

let initialCounters = [
  0, 0, 0
]

export default function ListOfCounters() {
    const [counters, setCounters] = useState(initialCounters)

    function handleClick(index) {
        const newCounters = counters.map((count, ind) => {
            if (ind === index) {
                return count + 1;
            } else {
                return count;
            }
        });
        setCounters(newCounters);
    }
    return (
        <ul>
        {counters.map((counter, index) => (
            <li key={index}>
                {counter}
                <button onClick={() => (handleClick(index))}>+1</button>
            </li>
          ))}
        </ul>
    )
}