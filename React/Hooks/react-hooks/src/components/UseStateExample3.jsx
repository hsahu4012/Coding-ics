import React, { useState } from 'react'

const UseStateExample3 = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        // setCount(count + 1); take initialk value 0
        // setCount(count + 1);           Still it increase by only 1. Because it is in running State not updating
        // setCount(count + 1); take initial value 0
        // setCount(count + 1); take initial value 0

        // To update this counter by 4
        setCount(count => count + 1)  // 1  also we can change prev value name  
        setCount(prev => prev + 1)    // 2
        setCount(prev => prev + 1)    // 3
        setCount(prev => prev + 1)    // 4
        // It will increase by 4 due to arrow function and previous value 

    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase by 4</button>
        </div>
    )
}

export default UseStateExample3