import React, { useContext } from 'react'
import Profile from './Profile'
import Footer from './Footer'
import { AppContext } from './AppContext';

const Contact = () => {
    const phone = useContext(AppContext);
    return (
        <>
            <h1>Contact</h1>
            <h3>phone: {phone}</h3>
        </>
    )
}

export default Contact
