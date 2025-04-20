import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHooksExample = () => {
    const [name, setName] = useLocalStorage('username', "");

    return (
        <div>
            < input type='text' placeholder='Enter Your Name' value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h2>Hello {name}!</h2>
        </div>
    )
}

export default CustomHooksExample

// Own Hook