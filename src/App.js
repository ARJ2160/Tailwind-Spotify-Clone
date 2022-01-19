import NavBar from "./components/NavBar"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import DropDown from "./components/DropDown";

function App() {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })

    return (
        <>
            <NavBar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
