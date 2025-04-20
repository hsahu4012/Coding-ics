import React, { useRef } from 'react'

const UseRefExample2 = () => {

    const inputElem = useRef();
    const btnClick = () => {
        console.log(inputElem.current);
        inputElem.current.style.background = "Blue";
    }
    // OUTPUT 
    // <input type="text"></input>


    return (
        <div>
            <input type="text" ref={inputElem} />
            <button onClick={btnClick}>Click Here</button>
        </div>
    )
}

export default UseRefExample2