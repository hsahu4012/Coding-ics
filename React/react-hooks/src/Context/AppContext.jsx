import React from 'react'
import { createContext } from 'react'
export const AppContext = createContext()

const ContextProvider = (props) => {
    const phone = "+1 9861196409";
    return (

        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider;
