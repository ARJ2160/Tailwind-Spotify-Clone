import React from 'react'
import Logo from "../assets/logo.svg"

const NavBar = () => {
    return (
        <nav className="bg-black pl-9 pr-9 w-screen text-white flex justify-between items-center fixed">
            <div className="nav--logo flex items-center">
                <a href="/" className="nav--logo-primary">
                    <img className="m-3" src={Logo} alt="logo" />
                    {/* <Logo /> */}
                </a>
            </div>
            <ul className="py-4 space-x-11 flex justify-end">
                <li className='mx-2 cursor-pointer'>Premium</li>
                <li className='mx-2 cursor-pointer'>Support</li>
                <li className='mx-2 cursor-pointer'>Download</li>
            </ul>
        </nav>
    )
}

export default NavBar