'use client'
import React from 'react'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi'
function NavBar2() {
  const [Active, setActive] = useState(false)
  const [allCategories, setallCategories] = useState(false)
  return (
    <>
      <div className='flex justify-between px-56 items-center gap-3 py-4'>
        <div className='flex items-center relative'>
          <p className='w-[80px] text-sm flex' onClick={() => {
            setActive(!Active)
          }}>Shop by Category
           {!Active ? (<FiChevronDown className='text-3xl' />)
            : (<FiChevronUp className='text-3xl'/>)}
            </p>
         
          {Active && (
            <div className='absolute top-12'>
              <Categories />
            </div>
          )}

        </div>

        <div className='border-2 border-gray-500 relative  w-full flex items-center justify-between'>
          <FiSearch className='text-xl absolute top-2 left-2' />
          <input type="text" placeholder='Search for anything' className='focus:outline-none w-full h-10 border-none px-10' />
          <div className='flex items-center border-l-2 relative border-gray-500 w-52  py-3 gap-5 px-3'
            onClick={() => setallCategories(!allCategories)}
          >
            <p className='text-xs'>All Categories</p>
            {allCategories ? (<FiChevronUp />) : (<FiChevronDown />)}
            {allCategories && (
              <div className='absolute top-12'>
                <Categories />
              </div>
            )}
          </div>
        </div>
        <button className='bg-[#3665f3] text-white py-2 px-14'>Search</button>
        <p className='text-xs'>Advanced</p>
      </div>
      <hr />
    </>
  )
}

export default NavBar2

const Categories = () => {
  return (

    <div className='bg-gradient-to-r from-gray-100 to-gray-200 w-full overflow-clip border  rounded-lg' >
      <ul className=' hover:cursor-pointer  child:px-7 child:py-2 child:rounded-sm '>
        <li className='hover:bg-[#3665f3] hover:text-white'>Groceries</li>
        <li className='hover:bg-[#3665f3] hover:text-white'>Accesories</li>
        <li className='hover:bg-[#3665f3] hover:text-white'>Phones</li>
        <li className='hover:bg-[#3665f3] hover:text-white'>Electronics</li>
        <li className='hover:bg-[#3665f3] hover:text-white'>Shoes</li>
        <li className='hover:bg-[#3665f3] hover:text-white'>Apparel</li>
      </ul>
    </div>

  );
}