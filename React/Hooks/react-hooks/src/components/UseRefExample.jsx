import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
    const [value, setValue] = useState(0);


    // It will render infinite time 
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setCount(prev => prev + 1)
    // })

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1
    })

    return (
        <div>
            <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
            <h1>{value}</h1>
            <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
            <h1>Render Count: {count.current}</h1>
        </div>
    )
}

export default UseRefExample

// useRef is a react hook that allow us to create mutable variables, which will not re-render the component
// Accessing DOM Element and modify it

