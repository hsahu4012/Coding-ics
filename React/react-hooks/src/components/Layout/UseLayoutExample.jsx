import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutExample = () => {
    useEffect(() => {
        console.log("Message from useEffect");
    }, [])

    useLayoutEffect(() => {
        console.log("Message from useLayoutEffect");
    }, [])
    return (
        <div>
            <h2>Test Message</h2>
            {Array(40).fill('').map((item, index) => (<li key={index}>{Math.random(Math.pow(Math.random(), 10))}</li>))}
        </div>
    )
}

export default UseLayoutExample

// Works similar to useEffect
// but it is called before the user Interface get mounted (Before printing DOM)

// first change , then display
