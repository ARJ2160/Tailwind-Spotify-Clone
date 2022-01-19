import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({ isOpen, toggle }) => {
    return (
        <>
            <div
                className={
                    isOpen ?
                        "grid grid-rows-3 text-center pt-16 items-end bg-black text-white" : "hidden"}
                onClick={toggle}>
                <Link to="/" className="p-4">Premium</Link>
                <Link to="/menu" className="p-4">Support</Link>
                <Link to="/" className="p-4">Download</Link>
            </div>
        </>
    )
}

export default DropDown
