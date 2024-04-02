import React from 'react';
import Header from './Header';
import image from '../Images/image289.jpg'
export default function Home() {
    return (
        <>
            <Header />
            <img src={image} alt='logo' style={{ position: "relative", bottom: "550px", left: "70px" }} />
            <h4 class="fw-bold mb-2 text-uppercase" style={{ position: "relative", bottom: "550px", left: "70px" }} >Welcome to Digitalflake Admin</h4>
        </>
    )
}