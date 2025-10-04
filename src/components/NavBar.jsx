import { Link } from "react-router-dom"
import profile from './../assets/Images/profile.png'
import logo from "./../assets/Images/logo.png"

function NavBar() {
  return (
    <nav className="flex justify-between px-15">
      <div className="flex  text-2xl font-medium py-6 items-center gap-10 text-gray-300  ">
        <Link to='/'>
          <img className='w-[10rem] items-center' src={logo} alt="" />
        </Link>
        <Link to='/Movies'>
          <span className="hover:text-blue-200 transition-all duration-150 ease-in-out">
            Movies
          </span>
        </Link>
        <Link to='/Series'>
          <span className="hover:text-blue-200 transition-all duration-150 ease-in-out">
            Series
          </span>
        </Link>
        <Link to='/Trending'>
          <span className="hover:text-blue-200 transition-all duration-150 ease-in-out">
            Trending
          </span>
        </Link>
        <Link to='/Coming'>
          <span className="hover:text-blue-200 transition-all duration-150 ease-in-out">
            Coming Soon
          </span>
        </Link>
      </div>
      <div className="pr-5 mt-5">
        <Link to='/Profile'>
          <img className='w-[4.2rem] items-center' src={profile} />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar










































// import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
// import { HiPlus, HiDotsVertical } from 'react-icons/hi'
// import HeaderItem from "./HeaderItem"
// import { useState } from 'react'

// function Header() {
//     const [toggle, setToggle] = useState(false);
//     const menu = [
//         {
//             name: "HOME",
//             icon: HiHome
//         },
//         {
//             name: "SEARCH",
//             icon: HiMagnifyingGlass
//         },
//         {
//             name: "WATCHLIST",
//             icon: HiPlus
//         },
//         {
//             name: "MOVIES",
//             icon: HiPlayCircle
//         },
//         {
//             name: "ORGINALS",
//             icon: HiStar
//         },
//         {
//             name: "SERIES",
//             icon: HiTv
//         },
//     ]
//     return (
//         <div className="flex items-center gap-8 justify-between p-5 px-8 mt-3" >
//             <div className='flex items-center gap-8'>
//                 {<img src={logo} className='w-[80px] object-center md:w-[115px] object-fill ' />}
//                 <div className=' w-[50px] items-center hidden md:flex gap-8 '>
//                     {menu.map((item) => (
//                         <HeaderItem name={item.name} Icon={item.icon} />
//                     ))}
//                 </div>
//                 <div className='flex md:hidden gap-5'>
//                     {menu.map((item, index) => index < 3 && (
//                         <HeaderItem name={item.name} Icon={item.icon} />
//                     ))}
//                 </div>
//                 <div className='md:hidden' onClick={() => setToggle(!toggle)}>
//                     <HeaderItem name={''} Icon={HiDotsVertical} />
//                     {toggle ? <div className='absolute mt-4 bg-[#121212] border-[1px] px-5 py-4 border-gray-700 p-3'>
//                         {menu.map((item, index) => index > 2 && (
//                             <HeaderItem name={item.name} Icon={item.icon} />
//                         ))}
//                     </div> : null}
//                 </div>
//             </div>
//             <div>
//                 <img src={profile} className='w-[55px] rounded-full' />
//             </div>

//         </div>
//     )
// }

// export default Header