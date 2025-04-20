import React, { useCallback, useState } from 'react'
import Header from './Callback/Header';

const UseCallbackExample = () => {
    const [count, setCount] = useState(0);

    const newFunction = useCallback(() => { }, [])
    // Dependency should not present    


    return (
        <div>
            <Header newFunction={newFunction} />
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
        </div>
    )
}

export default UseCallbackExample;

// cache a function definition between re-renders.
// save us from crating multiple instance of same function when re-renders happen.
