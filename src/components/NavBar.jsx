import React from 'react'
import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

const NavBar = ({ toggle }) => {
    return (
        <nav className="bg-black pl-9 pr-9 h-16 w-screen text-white flex justify-between items-center fixed">
            <div className="nav--logo flex items-center">
                <a href="/" className="nav--logo-primary">
                    <img className="m-3" src={Logo} alt="logo" />
                </a>
            </div>
            <div className="px-4 cursor-pointer md:hidden" onClick={ toggle }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" fill="#000"/>
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="mx-2 cursor-pointer">Premium</Link>
                <Link to="/" className="mx-2 cursor-pointer">Support</Link>
                <Link to="/" className="mx-2 cursor-pointer">Download</Link>
            </div>
        </nav>
    )
}

export default NavBar