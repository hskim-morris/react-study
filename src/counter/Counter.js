import React, { useState } from 'react';
import './Counter.css';

function Counter() {

    const [conter, setCounter] = useState(0);

    const plus = (e) => {
        setCounter(conter + 1);
    };

    const minus = (e) => {
        setCounter(conter - 1);
    };

    return (
        <>
            <input type='text'
                name='counter'
                value={conter}
                readOnly={true}
            />

            <input type="button" defaultValue="+" onClick={plus} id="plus" />
            <input type="button" defaultValue="-" onClick={minus} id="minus" />
        </>
    );
}

export default Counter;
