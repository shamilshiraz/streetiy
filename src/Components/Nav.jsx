import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'



const Nav = () => {

 const [visible,setVisible]=useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src='/s.png' className='h-[30px]'/>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to={'/'} className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to={'/col'} className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to={'/cont'} className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src="/search.jpg" className='h-[30px]' alt="" />
        <div className="group relative">
        <img src="/prof.webp" className='h-[40px]' alt="" />
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="cursor-pointer hover:text-black">Profile</div>
            <div className="cursor-pointer hover:text-black">Orders</div>
            <div className="cursor-pointer hover:text-black">Logout</div>
        </div>
        </div>
        <Link to='/cart' className="relative">
        <img src="/bag.jpg" className='h-[40px]' alt="" />
        <p className="absolute right-[5px] bottom-[5px] w-4 text-center leading-4 bg-black text-white aspec-square rounded-full text-[8px]">0</p>
        </Link>
        <img onClick={()=>setVisible(true)} src="/menu.svg" className='h-[20px] cursor-pointer sm:hidden ' alt="" />
        </div>

        {/* sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div className="flex items-center gap-4 p-3">
                    <img src="back.png"  className='h-6' alt="" />
                    <p>back</p>
                </div>
                <NavLink className='py-2 pl-6 border' to={'/'}>Home</NavLink>
                <NavLink className='py-2 pl-6 border' to={'/col'}>Collection</NavLink>
                <NavLink className='py-2 pl-6 border' to={'/about'}>About</NavLink>
                <NavLink className='py-2 pl-6 border' to={'/cont'}>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Nav

