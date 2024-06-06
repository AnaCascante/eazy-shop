import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increment () {
        setCount(count + 1);
    };

    function decrement () {
        setCount(count - 1);
    };

    function clearCounter() {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={clearCounter}>Clear</button>
        </div>
    );
}

export default Counter;