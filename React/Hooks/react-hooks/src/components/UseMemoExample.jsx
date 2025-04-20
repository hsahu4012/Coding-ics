import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const cubeNum = (num) => {
        console.log("Calculation Done");
        return Math.pow(num, 3)
    }

    // const result = cubeNum(number);
    const result = useMemo(() => cubeNum(number), [number]);


    return (
        <div>
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <h1>Cube of the Number: {result}</h1>
            <button onClick={() => { setCounter(counter + 1) }}>Counter++</button>
            <h1>Counter: {counter}</h1>
        </div>
    )
}

export default UseMemoExample

// useMemo ruturns a memoized VALUE ( Cached Value )

// only runs when one of its dependencies gets updated

// Improve performance