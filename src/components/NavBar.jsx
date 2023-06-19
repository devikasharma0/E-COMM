'use client'
import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
function NavBar() {
  const [isActive, setisActive] = useState(false)
  const [notification, setnotification] = useState(false)
  
  return (
    <>
      <nav>
        <div className='flex justify-between items-center mx-32 py-[3px] text-xs'>
          <ul className='flex gap-5'>
            <li>Hi!<a href="#" className='text-blue-900'> Sign In</a> or <a href="#" className='text-blue-900'>Register</a></li>
            <li><a href="#">Daily Deals</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
          <ul className='flex gap-5 relative'>
            <li className='flex items-center'><a href="#">Sell</a></li>
            <li className='flex items-center gap-1' onClick={() =>
              setisActive(!isActive)}><a href="#" >Watchlist</a>
              {!isActive ? <FiChevronDown /> : <FiChevronUp />}
              {isActive && (
                <div className='absolute top-5'>
                  <Categories />
                </div>
              )}
            </li>
            <li className='flex items-center gap-1'><a href="#">My eBay</a><FiChevronDown /></li>
            <li className='flex items-center text-2xl'><IoMdNotificationsOutline /></li>
            <li className='flex items-center text-2xl'><IoCartOutline /></li>
          </ul>
        </div>
        <hr />
      </nav>
    </>
  )
}

export default NavBar

const Categories = () => {
  return (
    <div className='h-52 w-52 bg-white border-2 border-gray-500 rounded-xl grid place-items-center'>
      <h1 className=''>Coming soon</h1>
    </div>
  )
}

const Notification = () => {
  return (
    <>
      <div>
        <div>
          <h1>Notifications</h1>
        </div>
        <ul>
            <li></li>
        </ul>
      </div>
    </>
  )
}