import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <Header />
            {/* <Home /> */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout