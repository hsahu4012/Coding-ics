import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header">
                <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Home
                </NavLink>

                <NavLink to='/about' style={({ isActive }) => {
                    return
                    ({ color: isActive ? red : black })
                }}>
                    About
                </NavLink>
            </div>
        </>
    )
}

export default Header