import React, { useState } from 'react'

const UseStateExample2 = () => {
    // Instead of Using Multiple State Variable we can Use State Object 

    // const [brand, setBrand] = useState("Ferrari");
    // const [model, setModel] = useState("Roma");
    // const [year, setYear] = useState("2023");
    // const [color, setColor] = useState("Red");

    // Like This 
    const [car, setCar] = useState(
        {
            brand: "Ferrari",
            model: "Roma",
            year: "2023",
            color: "Red"
        }
    );

    // use the Previous value as spread operator and use change 
    const changeColor = () => {
        setCar((prev) => {
            return { ...prev, color: "Blue" }
        })
    }







    return (
        <div>
            <h1>My {car.brand}</h1>
            <h2>It us a {car.color} {car.model} from {car.year}</h2>
            <button onClick={changeColor}>Blue</button>
        </div>
    )
}

export default UseStateExample2