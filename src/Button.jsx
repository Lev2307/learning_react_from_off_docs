import { useRef } from 'react';
import './Button.css';

function Button({ name }) {
    const value = useRef(0);

    function handleClick() {
        value.current += 1;
        alert('You clicked ' + value.current + ' times!');
    }
    return(
        <button onClick={handleClick} className="btn">{ name }</button>
    );
}

export default Button;