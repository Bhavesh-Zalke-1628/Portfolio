import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Container({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Container
