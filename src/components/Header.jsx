import profile from './../assets/Images/profile.png'
import logo from "./../assets/Images/logo.jpg"
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from "./HeaderItem"
import { useState } from 'react'

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCHLIST",
            icon: HiPlus
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "ORGINALS",
            icon: HiStar
        },
        {
            name: "SERIES",
            icon: HiTv
        },
    ]
    return (
        <div className="flex items-center gap-8 justify-between p-5 px-18">
            <div className='flex items-center gap-8'>
                {/* <img src={logo} className='w-[80px] object-center md:w-[115px] object-fill' /> */}
                <div className=' w-[50px] hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />
                    {toggle ? <div className='absolute mt-4 bg-[#121212] border-[1px] px-5 py-4 border-gray-700 p-3'>
                        {menu.map((item, index) => index > 2 && (
                            <HeaderItem name={item.name} Icon={item.icon} />
                        ))}
                    </div> : null}
                </div>
            </div>
            <div>
                <img src={profile} className='w-[50px] rounded-full' />
            </div>

        </div>
    )
}

export default Header