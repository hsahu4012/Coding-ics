import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    // useEffect(callbackFunction, dependencyArray)

    // without any Dependency: Run in every 1000 milisecond 
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count + 1);
    //     }, 1000)
    // })

    // With Dependency(Empty Array) : Execute only once
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count + 1);
    //     }, 1000)
    // }, [])

    // With Dependency : Execute only once
    // Infinite run due to No Button to control in every render it will call useEffect
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count + 1);
    //     }, 1000)
    // }, [])


    const countIncrease = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
    }, [count])

    return (
        <div>
            <h1>I've rendered {count} times!</h1>
            <button onClick={countIncrease}> countChange</button>
        </div>
    )
}

export default UseEffectExample;


// useEffect allow use to perform side effect in our component 
// Some Examples are :
    // Fetching date from API 
    // Directly updating the dom
    // Timers like setTimeOut and setInterval