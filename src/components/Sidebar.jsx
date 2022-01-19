import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
// import { Divider } from './Divider';
import { SideBarIcon } from './SidebarIcon';

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
            <SideBarIcon icon={<BsGearFill size="22" />} />
        </div>
    )
}

export default Sidebar