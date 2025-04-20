import React, { useState } from "react";
const useStateExample = () => {
    // const counter = useState(0)[0];
    // const setCounter = useState(0)[1];
    // const [counter, setCounter] = useState(10);
    // console.log(counter);
    // console.log(setCounter);

    // let color = "Red";
    const [color, setColor] = useState("Red");
    const changeColor = () => {
        // color = "Blue";
        // console.log(color)
        setColor("Blue");
    }
    return (
        <>
            <h1>My favourite Color is {color}</h1>
            <button onClick={changeColor}>Blue</button>
        </>
    )
}
export default useStateExample;
