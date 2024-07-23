import { useState } from "react";

export default function Score() {
    const [score, setScore] = useState(0);

    function increase() {
        setScore(score + 1);
    }
    function decrease() {
        if (score === 0) {
            alert('Нельзя меньше 0!')
        } else {
            setScore(score - 1);
        }
    }
    return(
        <>
            <h5>{score}</h5>
            <button onClick={increase}>Increase value!</button>
            <button onClick={decrease}>Decrease value!</button>
        </>
    )
}